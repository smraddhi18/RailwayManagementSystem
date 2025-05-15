# IRCTC Booking API

A backend system that mimics IRCTC seat booking, supporting user registration, JWT-based auth, admin-protected routes, and real-time race-condition-safe booking.

## 🛠 Tech Stack
- Node.js + Express
- MySQL with mysql2/promise
- JWT for Auth
- API Key for Admin routes

## 📦 Setup
```bash
git clone https://github.com/smraddhi18/RailwayManagementSystem.git
npm install
```

## 📂 Initialize DB
```bash
mysql -u root  < src/db/schema.sql
```

## 🚀 Run Server
```bash
npm run dev
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
