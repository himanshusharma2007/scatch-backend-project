const express = require("express");
const router = express.Router();

const { registerController } = require("../controllers/authController");
const { loginController } = require("../controllers/authController");
router.get("/", (req, res) => {
  res.send("hey it is working ");
});
router.post("/register", registerController);
router.post("/login", loginController);
module.exports = router;
