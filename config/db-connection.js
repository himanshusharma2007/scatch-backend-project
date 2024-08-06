const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/scatch")
  .then((result) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
