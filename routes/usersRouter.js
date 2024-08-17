const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey it is working ");
});
router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
 
    let user = await userModel.create({
      fullName,
      email,
      password,
    });
    res.send(user);
    console.log(fullName);
  } catch (error) {
    console.log("error :>> ", error.message);
  }
});
module.exports = router;
