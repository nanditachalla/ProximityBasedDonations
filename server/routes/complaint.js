const express = require("express");
const router = express.Router();
const { Complaint } = require("../models");

router.get("/", async (req, res) => {
  const noOfComp = await Complaint.findAll();
  res.json(noOfComp);
  //res.send("Hello World");
});
router.post("/", async (req, res) => {
  const t = req.body.title;
  const p = req.body.post;

  const e = req.body.email;

  await Complaint.create({
    title: t,

    post: p,
    email: e,
    //password: pwd,
    //createdAt: null,
    //updatedAt: null,
    //p,
  });
  // res.json(post);
});
module.exports = router;
