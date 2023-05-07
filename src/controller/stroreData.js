const { models } = require("mongoose");
const model = require("../model/Schema");
const bcrypt = require("bcrypt");

const storeData = async (req, res) => {
  try {
    const newData = await model({
      name: req.query.name,
      email: req.query.email,
      password: req.query.password,
    });

    const result = await newData.save();
    res.status(200).send("result: " + result);
  } catch (error) {
    console.log("error", error);
  }
};

const getData = async (req, res) => {
  try {
    console.log(req.query.email);
    const hash = await bcrypt.hash(req.query.password, 10);
    const result = await model.find({ name: req.query.name }).exec();
    const passwordMatch = await bcrypt.compare(hash, result.password);
    if (passwordMatch) {
      res.json(result);
    } else {
      res.send("error", error);
    }
    res.send(req.query);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { storeData, getData };
