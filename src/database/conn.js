const mongoose = require("mongoose");

const conn = async () => {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/Password")
    .then(() => {
      console.log("connection to Mongoose");
    })
    .catch((err) => {
      console.log("error connecting to Mongoose - " + err.message);
    });
};

module.exports = conn;
