const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/frames"
  );
  
  const cartSeed = [
    {
      userID: "5e61ac00fc8f4e67c8568f12", 
      sku: "26956",
      series:"Poems",
      finish:"Matte Color",
      length: 48,
      height: 48,
      totalMeasure: 16,
      cost: 224
    },
    {
        userID: "5e61ac00fc8f4e67c8568f12", 
        sku: "26958",
        series:"Poems",
        finish:"Matte Color",
        length: 48,
        height: 48,
        totalMeasure: 16,
        cost: 224
    },
    {
        userID: "5e61ac00fc8f4e67c8568f13", 
        sku: "24901",
        series:"Black 06",
        finish:"Matte Black",
        length: 48,
        height: 48,
        totalMeasure: 16,
        cost: 96
    },
    {
        userID: "5e61ac00fc8f4e67c8568f14", 
        sku: "63350",
        series:"Armour",
        finish:"Gold and Silver",
        length: 48,
        height: 48,
        totalMeasure: 16,
        cost: 240
    }
  ];

  db.Cart
  .remove({})
  .then(() => db.Cart.collection.insertMany(cartSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });