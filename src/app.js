const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const trainRoutes = require('./routes/trains');
const bookingRoutes = require('./routes/bookings');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
app.use(helmet(), morgan('tiny'), express.json());

// mount
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/trains', trainRoutes);
app.use('/api/v1/bookings', bookingRoutes);

// global error handler
app.use(errorHandler);

module.exports = app;
