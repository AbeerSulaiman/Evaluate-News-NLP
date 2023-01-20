// Data = {}
const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fetch = require("node-fetch");
const PORT = 8080;
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT} !`);
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/views/index.html"));
});
app.post("/resultInfo", async function (req, res) {
  console.log(req.body.temp, "req");
  console.log(process.env.API_Key);
  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_Key}&url=${req.body.temp}&lang=en`
  );
  const data = await response.json();
  res.send(data);
});
