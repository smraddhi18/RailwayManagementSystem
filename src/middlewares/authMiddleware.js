const jwt = require('jsonwebtoken');
const pool = require('../db/pool');
require('dotenv').config();

exports.requireAuth = async (req, _res, next) => {
  const authHeader = req.headers.authorization?.split(' ');
  if (authHeader?.[0] !== 'Bearer' || !authHeader[1]) {
    return next({ status: 401, message: 'Missing token' });
  }

  try {
    const decoded = jwt.verify(authHeader[1], process.env.JWT_SECRET);
    const [[user]] = await pool.execute('SELECT id, email FROM users WHERE id = ?', [decoded.id]);
    if (!user) {
      return next({ status: 401, message: 'User not found' });
    }

    req.user = user; 
    next();
  } catch (err) {
    next({ status: 403, message: 'Invalid token' });
  }
};


exports.requireApiKey = (req, res, next) => {
  if (req.headers["x-api-key"] !== process.env.ADMIN_API_KEY) {
    return next({ status: 403, message: "Forbidden: Invalid API Key" });
  }
  next();
};