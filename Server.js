const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const stockRoutes = require("./routes/stockRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log(" MongoDB Atlas connected"))
  .catch((err) => console.error(" MongoDB connection error:", err));

  app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/stocks", stockRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

