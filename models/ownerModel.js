const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/scatch");
const ownerSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  products: [],

  picture: String,
});

module.exports = mongoose.model("owner", ownerSchema);
