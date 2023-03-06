const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();

connectDB();

app.use(express.json());

// Import Routes
const authRoutes = require("./routes/auth");

// Route Middlewares
app.use("/api/user", authRoutes);

app.listen(4000, () => {
  console.log("Server Started on PORT 3000");
});
