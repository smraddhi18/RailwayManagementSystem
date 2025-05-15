const express = require("express");
const { body, param } = require("express-validator");
const { createBooking, getBookingDetails } = require("../controllers/booking");
const { requireAuth } = require("../middlewares/authMiddleware");
const { validate } = require("../middlewares/validate");
const router = express.Router();

router.post(
  "/",
  requireAuth,
  validate([
  body("trainId")
    .isInt().withMessage("trainId must be integer")
    .isLength({ min: 1 }).withMessage("trainId must not be empty")
])
,
  createBooking
);

router.get('/:id', requireAuth, validate([param('id').isInt()]), getBookingDetails);


module.exports = router;

