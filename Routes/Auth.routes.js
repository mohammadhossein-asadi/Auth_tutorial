const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../Models/User.model");

router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw createError.BadRequest();

    const doesExist = await User.findOne({ email: email });
    if (doesExist)
      throw createError.Conflict(`${email} is already been registered`);

    const user = new User({ email, password });
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  res.send("Login routes");
});

router.post("/refresh-token", async (req, res, next) => {
  res.send("Refresh token route");
});

router.delete("/logout", async (req, res, next) => {
  res.send("Logout routes");
});

module.exports = router;
