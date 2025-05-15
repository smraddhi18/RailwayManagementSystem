require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB: {
    DIALECT: process.env.DB_DIALECT,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
  },
  JWT_SECRET: process.env.JWT_SECRET,
};