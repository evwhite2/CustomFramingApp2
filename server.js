const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8081;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://whitestudioframes2020:studio2020@ds033797.mlab.com:33797/heroku_5875wdc2";
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

 
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use("/", routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

 