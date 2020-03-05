const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/frames"
  );
  
  const cartSeed = [
    {
      userID: "5e5f0e3057b8a39f18d81b72", 
      sku: "26986",
      length: 48,
      height: 48,
      totalMeasure: 16,
      cost: 224
    },
    {
        userID: "5e5f0e3057b8a39f18d81b72", 
        sku: "26958",
        length: 48,
        height: 48,
        totalMeasure: 16,
        cost: 224
    },
    {
        userID: "5e5f0e3057b8a39f18d81b73", 
        sku: "24901",
        length: 48,
        height: 48,
        totalMeasure: 16,
        cost: 96
    },
    {
        userID: "5e5f0e3057b8a39f18d81b74", 
        sku: "63350",
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