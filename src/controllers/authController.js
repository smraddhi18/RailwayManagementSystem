const { token } = require("morgan");
const { registerUser, loginUser } = require("../services/authService");

exports.register = async (req, res, next) => {
  try {
    await registerUser(req.body.email, req.body.password);
    res.status(201).json({success:true, message: "User registered" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);
    res.json({ success:true, token });
  } catch (err) {
    next(err);
  }
};
