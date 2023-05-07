const express = require("express");
const router = express.Router();
const {getData,storeData} = require("../controller/stroreData");

router.route("/").get(getData);
router.route("/").post(storeData);

module.exports = router;
