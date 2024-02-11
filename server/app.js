const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json({ limit: "500mb" }));
app.use(cors());
app.use("/messages", router);

mongoose
  .connect(process.env.DB_CREDENTIALS)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
