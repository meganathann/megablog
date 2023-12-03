const express = require("express");
const router = express.Router();
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  getPrivateData,
} = require("../Controllers/auth");
const { getAccessToRoute } = require("../Middlewares/Authorization/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword", resetPassword);
router.get("/private", getAccessToRoute, getPrivateData);

module.exports = router;
