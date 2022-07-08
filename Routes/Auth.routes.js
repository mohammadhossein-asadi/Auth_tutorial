const router = require("express").Router();
const {
  register,
  login,
  refreshToken,
  logout,
} = require("../Controllers/auth.controllers");

router.post("/register", register);

router.post("/login", login);

router.post("/refresh-token", refreshToken);

router.delete("/logout", logout);

module.exports = router;
