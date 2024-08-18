const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const cookieParser=require("cookie-parser");
const jwt=require("jsonwebtoken");
router.get("/", (req, res) => {
  res.send("hey it is working ");
});
router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  if (email === "" || fullName === "" || password.length < 6)
    res.status(500).send("incorrect user credentials");
  try {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) res.send("somthing went wrong");

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) res.send("somthing went wrong");
        let user = await userModel.create({
          fullName,
          email,
          password: hash,
        });
        console.log(fullName);
        const token= jwt.sign({email},"shhhhh");
        res.cookie("token",token);
        res.send("user created successfully ");
      });
    });
  } catch (error) {
    console.log("error :>> ", error.message);
  }
});
module.exports = router;
