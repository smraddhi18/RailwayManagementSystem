const pool = require("../db/pool");

exports.bookSeat = async (trainId, userId) => {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    const [trains] = await conn.execute(
      "SELECT totalSeats FROM trains WHERE id = ? FOR UPDATE",
      [trainId]
    );
    if (!trains.length) throw { status: 404, message: "Train not found" };

    const [[{ count }]] = await conn.execute(
      "SELECT COUNT(*) AS count FROM bookings WHERE trainId = ?",
      [trainId]
    );
    if (count >= trains[0].totalSeats) throw { status: 400, message: "No seats available" };

    const [result] = await conn.execute(
      "INSERT INTO bookings (trainId, userId) VALUES (?, ?)",
      [trainId, userId]
    );

    await conn.commit();

    return result.insertId ;
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    conn.release();
  }
};

exports.getBooking = async (bookingId, userId) => {
  const [[booking]] = await pool.execute(
    "SELECT * FROM bookings WHERE id = ? AND userId = ?",
    [bookingId, userId]
  );
  if (!booking) throw { status: 404, message: "Booking not found" };
  return booking;
};
