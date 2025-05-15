const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db/pool");

exports.registerUser = async (email, password) => {
  const hashed = await bcrypt.hash(password, 10);
  await pool.execute("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashed]);
};

exports.loginUser = async (email, password) => {
  const [[user]] = await pool.execute("SELECT * FROM users WHERE email = ?", [email]);
  if (!user) throw { status: 401, message: "Invalid credentials" };
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw { status: 401, message: "Invalid credentials" };
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
};