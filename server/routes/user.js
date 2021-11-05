const express = require("express");
const router = express.Router();
const { Donor } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const noOfUsers = await Donor.findAll();
  res.json(noOfUsers);
  //res.send("Hello World");
});
router.get("/byId/:email", async (req, res) => {
  const email = req.params.email;
  const post = await Donor.findByPk(email);
  res.json(post);
});
router.post("/", async (req, res) => {
  const n = req.body.name;
  const desc = req.body.description;
  const p = req.body.phone;
  const e = req.body.email;
  const pwd = req.body.password;
  const hno = req.body.house_no;
  const pr = req.body.province;
  const city = req.body.city;
  const pi = req.body.pincode;
  //const r=req.body.role;
  bcrypt.hash(pwd, 10).then((hash) => {
    Donor.create({
      name: n,
      description: desc,
      phone: p,
      email: e,
      password: hash,
      house_no: hno,
      province: pr,
      city: city,
      pincode: pi,
      //p,
    });
  });
  // res.json(post);
});

router.post("/login", async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  const user = await Donor.findOne({ where: { email: email } });

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    res.json("YOU LOGGED IN!!!");
  });
});

module.exports = router;
