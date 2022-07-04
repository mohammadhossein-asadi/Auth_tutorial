const express = require("express");
const router = express.Router();

router.post("/register", async (req, res, next) => {
  res.send("Register routes");
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
