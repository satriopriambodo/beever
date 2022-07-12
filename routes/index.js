const express = require("express");
const router = express.Router();

const quoteRoute = require("./quoteRoute");

router.use("/quotes", quoteRoute);

module.exports = router;
