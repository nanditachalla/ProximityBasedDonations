const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(express.json());
app.use(cors());
//Router
const userrouter = require("./routes/user");
app.use("/User", userrouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Hello I am server.");
  });
});
