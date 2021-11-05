const express = require("express");
const router = express.Router();
const { Acceptor } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const noOfUsers = await Acceptor.findAll();
  res.json(noOfUsers);
  //res.send("Hello World");
});
router.get("/byId/:email", async (req, res) => {
  const email = req.params.email;
  const post = await Acceptor.findByPk(email);
  res.json(post);
});
router.get("/filterProv/:province", async (req, res) => {
  const prov = req.params.province;

  const noOfUsers = await Acceptor.findAll({
    where: {
      province: prov,
    },
  });
  res.json(noOfUsers);
  //res.send("Hello World");
});
router.get("/filterPin/:pincode", async (req, res) => {
  const prov = req.params.pincode;
  const noOfUsers = await Acceptor.findAll({
    where: {
      pincode: prov,
    },
  });
  res.json(noOfUsers);
  //res.send("Hello World");
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
    Acceptor.create({
      name: n,
      description: desc,
      phone: p,
      email: e,
      password: hash,
      house_no: hno,
      province: pr,
      city: city,
      pincode: pi,
      //role:r,
      //createdAt: null,
      //updatedAt: null,
      //p,
    });
    // res.json(post);
  });
});

router.post("/login", async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  const user = await Acceptor.findOne({ where: { email: email } });

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    res.json("YOU LOGGED IN!!!");
  });
});

module.exports = router;
