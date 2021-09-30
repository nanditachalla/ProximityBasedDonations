const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.get("/", async (req, res) => {
  const noOfUsers = await Users.findAll();
  res.json(noOfUsers);
  //res.send("Hello World");
});
router.post("/", async (req, res) => {
  const n = req.body.name;
  const desc = req.body.description;
  const p = req.body.phone;
  //const p = req.body;
  await Users.create({
    name: n,
    description: desc,
    phone: p,
    //createdAt: null,
    //updatedAt: null,
    //p,
  });
  // res.json(post);
});

module.exports = router;
