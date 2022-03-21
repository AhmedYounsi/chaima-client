const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel");

router.get("/get_all", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send("error");
  }
});
module.exports = router;
