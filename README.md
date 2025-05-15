# IRCTC Booking API

A backend system that mimics IRCTC seat booking, supporting user registration, JWT-based auth, admin-protected routes, and real-time race-condition-safe booking.

## 🛠 Tech Stack
- Node.js + Express
- MySQL with mysql2/promise
- JWT for Auth
- API Key for Admin routes

## 📦 Setup
```bash
git clone <repo>
cd irctc-api
npm install
cp .env.example .env
# Fill in your DB credentials
```

## 📂 Initialize DB
```bash
mysql -u root -p irctc < schema.sql
```

## 🚀 Run Server
```bash
npm start
```

## ✅ API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Trains (Admin)
- POST `/api/trains` (Requires x-api-key)


### Users
- GET `/api/trains/availability`
- POST `/api/bookings` (Requires JWT)
- GET `/api/bookings/:id` (Requires JWT)

## 📌 Notes
- Ensure `.env` contains a strong JWT_SECRET and API Key
- Uses row-level locking to prevent race conditions when booking seats
- Use Postman for easy testing
