const express = require("express");
const router = express.Router();
const Stock = require("../models/Stock.js");
const { getCMPFromYahoo, getPEAndEarningsFromGoogle } = require("../utils/scrapers");
router.get("/test", async (req, res) => {
  const cmp = await getCMPFromYahoo("TCS.NS");
  const peData = await getPEAndEarningsFromGoogle("TCS.NS");
  res.json({ cmp, ...peData });
});

router.get("/", async (req, res) => {
  try {
    const stocks = await Stock.find();
    const enriched = await Promise.all(
      stocks.map(async (stock) => {
        const cmp = await getCMPFromYahoo(stock.symbol);
        const { peRatio, earnings } = await getPEAndEarningsFromGoogle(stock.symbol);
        const presentValue = cmp * stock.qty;
        const gainLoss = presentValue - stock.investment;

        return {
          ...stock._doc,
          cmp,
          peRatio,
          earnings,
          presentValue,
          gainLoss
        };
      })
    );
    res.json(enriched);
    console.log(enriched);
  } catch (err) {
    console.error("Error fetching stock data:", err);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

module.exports = router;

