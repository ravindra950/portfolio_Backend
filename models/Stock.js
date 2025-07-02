const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  sector: { type: String, required: true },
  purchasePrice: { type: Number, required: true },
  qty: { type: Number, required: true },
  investment: { type: Number, required: true },
  portfolioPercent: Number,
  exchange: String
});

module.exports = mongoose.model("Stock", stockSchema);

