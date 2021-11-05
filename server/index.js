const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(express.json());
app.use(cors());
//Router
const userrouter = require("./routes/user");
app.use("/User", userrouter);
const crouter = require("./routes/complaint");
app.use("/Complaint", crouter);
const cprouter = require("./routes/createPost");
app.use("/CreatePost", cprouter);
const arouter = require("./routes/acceptor");
app.use("/acceptor", arouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Hello I am server.");
  });
});
