# Login Backend

This is the backend for the Login System project. It is built with Node.js, Express, and MongoDB, and provides REST API endpoints for user registration, login, and OTP verification.

## Features
- User registration with OTP email verification
- User login with JWT access and refresh tokens
- MongoDB database connection
- CORS and cookie support

## Folder Structure
```
Login_Backend/
  ├── .env
  ├── package.json
  └── src/
      ├── app.js
      ├── index.js
      ├── controller/
      │   └── user.controller.js
      ├── db/
      │   └── index.js
      ├── models/
      │   ├── User.model.js
      │   └── OTP.model.js
      ├── routes/
      │   └── User.route.js
      └── utils/
          ├── ApiError.js
          ├── ApiResponse.js
          ├── asyncHandler.js
          └── OTPSender.js
```

## Setup & Usage
1. Install dependencies:
   ```bash
   cd Login_Backend
   npm install
   ```
2. Set up a `.env` file with your MongoDB connection string and JWT secrets:
   ```env
   MONGO_DB=your_mongodb_connection_url
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=15m
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRY=7d
   ```
   > **Note:** The default `.env` uses a MongoDB Atlas connection string. Update it as needed.
3. Start the backend server:
   ```bash
   npm run dev
   ```
   The server runs on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Register User
- **POST** `/api/user/register`
- **Body:** `{ "username": string, "email": string, "password": string }`
- **Response:** User object, sends OTP to email

### Verify OTP
- **POST** `/api/user/verify-otp`
- **Body:** `{ "email": string, "otp": string }`
- **Response:** Success message if OTP is valid

### Login User
- **POST** `/api/user/login`
- **Body:** `{ "email": string, "password": string }`
- **Response:** User object, accessToken, refreshToken

## Development Notes
- Make sure MongoDB is running and accessible.
- The backend uses nodemailer for sending OTP emails (currently configured for Gmail in `OTPSender.js`). Update credentials as needed.
- Adjust CORS and API endpoints as needed for deployment.
- The backend implements user registration, login, and OTP verification. Add more features as needed.
