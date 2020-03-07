import React, { Component } from "react";
import "./quote.css";
import axios from "axios";
import Section from "../Section";
import calculate from "./js/RFQ"
import Modal from "./Modal";
import QuoteForm from "./QuoteForm";

class QuoteSpec extends Component{

  
  state={
    userID: "5e60428de672279aa8d30794", //hard coded to test, should be update when server is restarted to match the -id of user in your db you'd like to test, but we will get this update with authentification once we have it
    specData:{},
    height: Number,
    length: Number,
    totalMeasure: Number,
    cost: Number,
    activeModal: ""
  }  

  
  componentDidMount(){
    const skusku = this.props.match.params.sku;
    axios.get("/api/frames/quoteSpec/" + skusku).then(response =>{
      this.setState({specData: response.data[0]}, ()=>{
        console.log(this.state.specData)
      })
    })
  }

  handleHeight= event =>{
    this.setState({height: event.target.value})
  }
  
  handleLength= event =>{
    this.setState({length: event.target.value})
  }

  handleQuoteRequest= event =>{
    event.preventDefault()

      this.setState({totalMeasure: calculate.footageCalc(this.state.length, this.state.height)}, ()=>{

        this.setState({cost: calculate.priceCalc(this.state.totalMeasure, this.state.specData.price)})

        this.setState({activeModal: "is-active"})
      })
  }

  handleCart = event =>{
    event.preventDefault();

    var itemData = {
      userID: this.state.userID,
      frameID: this.state.specData._id,
      sku: this.state.specData.sku,
      height: this.state.height, 
      length: this.state.length, 
      totalMeasure: this.state.totalMeasure, 
      cost: this.state.cost
    }
    console.log("Adding to Cart: ", itemData);

    var postURL = `/api/cart/list/${this.state.userID}`
    axios.post(postURL, itemData).then(response=>{
      console.log("response from server",  response)
      this.setState({activeModal: ""})
    })
  }

  handleExit = () => {
    this.setState({activeModal: ""})
  } 

  render(){

  return (
    <Section>

      <div className="columns">
        <div className="column">

        <h1 className="is-size-3 has-text-centered banner">
          Calculate Quote: "{this.state.specData.series}" {this.state.specData.sku}</h1>
        <br/> 
        <div className="columns">
            <div className="column is-half v-centered left-pad">

                <label className="title">Specs</label>
                <br/>
                <br/>
                <div>SKU: {this.state.specData.sku}</div>
                <div>Price per Foot: ${this.state.specData.price}.00</div>
                <div>Finish: {this.state.specData.finish}</div>
                <div>Depth: {this.state.specData.depth} inches</div>
                <div>Width: {this.state.specData.width} inches</div>

          </div>
          <div className="column is-half">
        
            <QuoteForm
            height={this.state.height}
            handleHeight={this.handleHeight}
            length={this.state.length}
            handleLength={this.handleLength}
            handleQuoteRequest={this.handleQuoteRequest}
            />
          
          </div>
        </div>

        </div>

        <Modal
        activeModal={this.state.activeModal}
        totalMeasure= {this.state.totalMeasure}
        cost={this.state.cost}
        handleCart={this.handleCart}
        handleExit={this.handleExit}
        />

      </div>
      </Section>
  );
  }
}



export default QuoteSpec;
