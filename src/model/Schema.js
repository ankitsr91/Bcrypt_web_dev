const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const createSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    lowercase: true,
  },
  email: {
    type: "string",
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

//this middleware run before saving data
createSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

//this middleware run after saving data
// createSchema.post("save", async function (next) {
//   try {
//     console.log("Called after saving a uset");
//   } catch (error) {
//     next(error);
//   }
// });

const model = mongoose.model("FormData", createSchema);
module.exports = model;
