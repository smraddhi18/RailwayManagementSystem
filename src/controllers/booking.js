const { bookSeat, getBooking } = require("../services/bookingService");

exports.createBooking = async (req, res, next) => {
  try {
    const bookingId =  await bookSeat(req.body.trainId, req.user.id);
    res.status(201).json({ success: true,bookingId,message: "Seat booked successfully" });
  } catch (err) {
    next(err);
  }
};

exports.getBookingDetails = async (req, res, next) => {
  try {
    const bookingId = req.params.id;
    const userId = req.user.id; 
    const booking = await getBooking(bookingId, userId);
    res.json({success: true,booking});
  } catch (err) {
    next(err);
  }
};
