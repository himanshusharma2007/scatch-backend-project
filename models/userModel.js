const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/scatch");
const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password:Number,
  phone:Number,
  orders:[],
  cart:[],
  isAdmin:Boolean,
  picture:String,
});

module.exports = mongoose.model("user", userSchema);
