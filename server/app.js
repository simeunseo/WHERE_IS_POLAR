const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/messages", router);

mongoose
  .connect(
    "mongodb+srv://admin:Y5G4G5niY2APDPMK@stargazersonboarding.n3qpp7k.mongodb.net/"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
