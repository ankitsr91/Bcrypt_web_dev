const express = require("express");
const app = express();
const path = require("path");
const conn = require("./src/database/conn");
const product = require("./src/routers/product");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/upload", product);

app.get("/", (req, res) => {
  res.send("This is a test request");
});

const start = async () => {
  try {
    await conn();
    app.listen(8080, "127.0.0.1", () => {
      console.log("connect to server listening ....");
    });
  } catch (error) {
    console.log("error: " + error);
  }
};
start();
