const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connecting to DB"))
    .catch(() => console.log("Error: Cannot connect to DB"))
    .finally(() => console.log("Connected to DB"));
};

module.exports = connectDB;
