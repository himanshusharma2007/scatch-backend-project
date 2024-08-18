const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");
const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  const { fullName, email, password } = req.body;
  let findUser = await userModel.findOne({ email });
  if (findUser) return res.status(500).send("this email is already registered");
  if (email === "" || fullName === "" || password.length < 6)
    return res.status(500).send("incorrect user credentials");
  try {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.send("something went wrong");

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) res.send("somthing went wrong");
        let user = await userModel.create({
          fullName,
          email,
          password: hash,
        });
        console.log(fullName);
        const token = generateToken(user);
        res.cookie("token", token);
        res.send("user created successfully ");
      });
    });
  } catch (error) {
    console.log("error :>> ", error.message);
  }
};
const loginController = async (req, res) => {
      console.log(req.body);
  const { email, password } = req.body;
  let user = await userModel.findOne({ email });
  console.log(password);
  if (!user)return  res.status(401).send("email or passowrd is incorrect");
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = generateToken(user);
      res.cookie("token", token);
      res.send("you can login")
    } else {
      res.status(401).send("email or passowrd is incorrect");
    }
  });
};
module.exports.registerController = registerController;
module.exports.loginController = loginController;
