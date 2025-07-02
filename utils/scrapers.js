const yahooFinance = require("yahoo-finance2").default;

// Get CMP (Current Market Price)
async function getCMPFromYahoo(symbol) {
  try {
    const result = await yahooFinance.quote(symbol);
    return result.regularMarketPrice || 0;
  } catch (error) {
    console.error(`Yahoo CMP fetch failed for ${symbol}:`, error.message);
    return 0;
  }
}

// Get P/E and EPS (Earnings)
async function getPEAndEarningsFromGoogle(symbol) {
  try {
    const result = await yahooFinance.quoteSummary(symbol, {
      modules: ["defaultKeyStatistics", "financialData"]
    });

    const peRatio =
      result.defaultKeyStatistics?.forwardPE ||
      result.defaultKeyStatistics?.trailingPE ||
      result.financialData?.forwardPE ||
      0;

    const earnings =
      result.defaultKeyStatistics?.trailingEps?.raw ||
      result.financialData?.trailingEps?.raw ||
      0;

    return {
      peRatio: parseFloat(peRatio),
      earnings: earnings.toString()
    };
  } catch (error) {
    console.error(`Yahoo Finance P/E fetch failed for ${symbol}:`, error.message);
    return { peRatio: 0, earnings: "0" };
  }
}

module.exports = { getCMPFromYahoo, getPEAndEarningsFromGoogle };
