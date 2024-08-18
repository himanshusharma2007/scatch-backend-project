const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");
console.log("hey its executing ");
router.get("/", (req, res) => {
  const { fullName } = req.body;
  res.send(fullName);
  res.send("hey it is working ");
  console.log("process.env.NODE_ENV :>> ", process.env.NODE_ENV);
});

if (process.env.NODE_ENV === "development" || true) {
  router.get("/create", async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      res.status(500).send("theire can't be more than one owner");
    }
    const { fullName } = req.body;
    res.send(fullName);

    // let createdOwner = await ownerModel.create({
    //   fullName,
    //   email,
    //   password,
    // });
    // console.log(password);
    // res.send(createdOwner);
  });
}
// console.log(process.env.NODE_ENV)
module.exports = router;
