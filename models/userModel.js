const mongoose = require("mongoose");

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
