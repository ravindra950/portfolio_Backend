const mongoose = require("mongoose");
const Stock = require("./models/Stock"); 
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const sampleStocks = [
  {
    name: "HDFC Bank",
    symbol: "HDFCBANK.NS",
    sector: "Financials",
    purchasePrice: 1500,
    qty: 20,
    investment: 30000,
    portfolioPercent: 0.25,
    exchange: "NSE"
  },
  {
    name: "TCS",
    symbol: "TCS.NS",
    sector: "Technology",
    purchasePrice: 3600,
    qty: 10,
    investment: 36000,
    portfolioPercent: 0.30,
    exchange: "NSE"
  },
  {
    name: "Infosys",
    symbol: "INFY.NS",
    sector: "Technology",
    purchasePrice: 1350,
    qty: 30,
    investment: 40500,
    portfolioPercent: 0.45,
    exchange: "NSE"
  },
  {
    name: "HDFC Bank",
    symbol: "HDFCBANK.NS",
    sector: "Financials",
    purchasePrice: 1490,
    qty: 50,
    investment: 74500,
    portfolioPercent: 0.05,
    exchange: "NSE"
  },
  {
    name: "Bajaj Finance",
    symbol: "BAJFINANCE.NS",
    sector: "Financials",
    purchasePrice: 6466,
    qty: 15,
    investment: 96990,
    portfolioPercent: 0.06,
    exchange: "NSE"
  },
  {
    name: "ICICI Bank",
    symbol: "ICICIBANK.NS",
    sector: "Financials",
    purchasePrice: 780,
    qty: 84,
    investment: 65520,
    portfolioPercent: 0.04,
    exchange: "NSE"
  },
  {
    name: "Affle India",
    symbol: "AFFLE.NS",
    sector: "Technology",
    purchasePrice: 1151,
    qty: 50,
    investment: 57550,
    portfolioPercent: 0.04,
    exchange: "NSE"
  },
  {
    name: "LTI Mindtree",
    symbol: "LTIM.NS",
    sector: "Technology",
    purchasePrice: 4775,
    qty: 16,
    investment: 76400,
    portfolioPercent: 0.05,
    exchange: "NSE"
  }, {
    name: "TCS",
    symbol: "TCS.NS",
    sector: "Technology",
    purchasePrice: 3600,
    qty: 10,
    investment: 36000,
    portfolioPercent: 0.30,
    exchange: "NSE"
  },
  {
    name: "Infosys",
    symbol: "INFY.NS",
    sector: "Technology",
    purchasePrice: 1350,
    qty: 30,
    investment: 40500,
    portfolioPercent: 0.45,
    exchange: "NSE"
  },
  {
    name: "HDFC Bank",
    symbol: "HDFCBANK.NS",
    sector: "Financials",
    purchasePrice: 1490,
    qty: 50,
    investment: 74500,
    portfolioPercent: 0.05,
    exchange: "NSE"
  },
  {
    name: "Bajaj Finance",
    symbol: "BAJFINANCE.NS",
    sector: "Financials",
    purchasePrice: 6466,
    qty: 15,
    investment: 96990,
    portfolioPercent: 0.06,
    exchange: "NSE"
  },
  {
    name: "ICICI Bank",
    symbol: "ICICIBANK.NS",
    sector: "Financials",
    purchasePrice: 780,
    qty: 84,
    investment: 65520,
    portfolioPercent: 0.04,
    exchange: "NSE"
  },
  {
    name: "Affle India",
    symbol: "AFFLE.NS",
    sector: "Technology",
    purchasePrice: 1151,
    qty: 50,
    investment: 57550,
    portfolioPercent: 0.04,
    exchange: "NSE"
  },
];

async function InsertData() {
  try {
    await Stock.deleteMany();
    await Stock.insertMany(sampleStocks);
    console.log(" Sample stocks inserted into MongoDB");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error inserting sample data:", error.message);
    mongoose.disconnect();
  }
}

InsertData();
