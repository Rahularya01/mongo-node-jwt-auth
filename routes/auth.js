const router = require("express").Router();
const User = require("../models/User.js");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });

  try {
    const savedUser = await user.save();
    res.status(200).json({ savedUser });
  } catch (error) {
    res.status(401).json({ error });
  }
});

router.post("/login", (req, res) => {
  res.send("Login");
});

module.exports = router;
