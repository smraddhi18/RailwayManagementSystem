const express = require("express");
const { body } = require("express-validator");
const { register, login } = require("../controllers/authController");
const { validate } = require("../middlewares/validate");
const router = express.Router();
router.post(
  "/register",
  validate([
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ]),
  register
);
router.post(
  "/login",
  validate([body("email").isEmail(), body("password").exists()]),
  login
);
module.exports = router;