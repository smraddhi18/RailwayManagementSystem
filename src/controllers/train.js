const { addTrain, updateSeats, getAvailability } = require("../services/trainService");

exports.createTrain = async (req, res, next) => {
  try {
    const { id,name, source, destination, totalSeats } = req.body;
    await addTrain(id,name, source, destination, totalSeats);
    res.status(201).json({ success: true, message: "Train added" });
  } catch (err) {
    next(err);
  }
};


exports.availability = async (req, res, next) => {
  try {
    const data = await getAvailability(req.query.source, req.query.destination);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
