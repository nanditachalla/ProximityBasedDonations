const express = require("express");
const router = express.Router();
const { CreatePost } = require("../models");

router.get("/", async (req, res) => {
  const noOfPosts = await CreatePost.findAll();
  res.json(noOfPosts);
  //res.send("Hello World");
});
router.post("/:email", async (req, res) => {
  const t = req.body.items;
  const p = req.body.timespan;

  const e = req.body.contact;
  const email = req.params.email;

  await CreatePost.create({
    items: t,
    //photo: ph,
    timespan: p,
    contact: e,
    DonorEmail: email,
    //password: pwd,
    //createdAt: null,
    //updatedAt: null,
    //p,
  });
  //res.json(post);
});
router.get("/byId/:email", async (req, res) => {
  const email = req.params.email;
  const post = await CreatePost.findAll({ where: { DonorEmail: email } });
  res.json(post);
});
module.exports = router;
