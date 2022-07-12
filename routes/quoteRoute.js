const express = require("express");
const router = express.Router();
const {
  getUrl,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
} = require("../controllers/quoteController");

router.get("/url", getUrl);
router.get("/db", getQuote);
router.post("/", createQuote);
router.put("/:id", updateQuote);
router.delete("/:id", deleteQuote);

module.exports = router;
