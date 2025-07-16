# Login Backend

A Node.js Express backend for user authentication, registration, and OTP verification using MongoDB and JWT.

## Features

- User registration with email and password
- Email-based OTP verification (expires in 5 minutes)
- Secure password hashing with bcryptjs
- JWT-based authentication (access and refresh tokens)
- MongoDB for data storage (Mongoose ODM)
- Nodemailer for sending OTP emails
- Cookie support for storing tokens
- CORS enabled for frontend-backend communication

## Folder Structure

```
Login_Backend/
├── .env
├── package.json
└── src/
    ├── app.js
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

1. **Install dependencies:**
   ```sh
   cd Login_Backend
   npm install
   ```

2. **Set up a `.env` file with your MongoDB connection string and JWT secrets:**
   ```env
   MONGO_DB=your_mongodb_connection_url
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=15m
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRY=7d
   ```

3. **Start the backend server:**
   ```sh
   npm run dev
   ```
   The server runs on [http://localhost:3000](http://localhost:3000).

## API Endpoints

| Method | Endpoint                | Description                     |
|--------|------------------------ |---------------------------------|
| POST   | `/api/user/register`    | Register a new user             |
| POST   | `/api/user/verify-otp`  | Verify OTP for registration     |
| POST   | `/api/user/login`       | Login with email & password     |

### Example Request Bodies

#### Register

```json
{
  "username": "yourusername",
  "email": "youremail@example.com",
  "password": "yourpassword"
}
```

#### Verify OTP

```json
{
  "email": "youremail@example.com",
  "otp": "123456"
}
```

#### Login

```json
{
  "email": "youremail@example.com",
  "password": "yourpassword"
}
```

## Environment Variables

- `MONGO_DB`: MongoDB connection string
- `ACCESS_TOKEN_SECRET`: Secret for JWT access token
- `ACCESS_TOKEN_EXPIRY`: Access token expiry (e.g., 15m)
- `REFRESH_TOKEN_SECRET`: Secret for JWT refresh token
- `REFRESH_TOKEN_EXPIRY`: Refresh token expiry (e.g., 7d)

## Development Notes

- Make sure MongoDB is running and accessible.
- The backend uses nodemailer for sending OTP emails (configured for Gmail in `OTPSender.js`). Update credentials as needed.
- CORS is enabled for all origins (`origin: "*"`) and credentials support.
- CookieParser is used for handling cookies, useful for storing tokens securely.
- The backend implements user registration, login, and OTP verification. Add more features as needed.
