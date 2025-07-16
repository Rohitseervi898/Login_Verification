# Login System Project

A full-stack login system with a Node.js/Express/MongoDB backend and a React/Vite/TailwindCSS frontend.  
It provides user authentication, registration, and OTP verification flows.

---

## Project Structure

- `Login_Backend/` — Node.js/Express backend with MongoDB for user management
- `login_Frontend/` — React frontend built with Vite and styled with TailwindCSS

---

## Backend: `Login_Backend`

### Features

- REST API for user registration, login, and OTP verification
- MongoDB database connection (Mongoose ODM)
- Secure password hashing with bcryptjs
- JWT-based authentication (access and refresh tokens)
- Nodemailer for sending OTP emails
- Cookie support for storing tokens
- CORS enabled for frontend-backend communication

### Folder Structure

```
Login_Backend/
  ├── .env
  ├── package.json
  ├── README.md
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

### Setup & Usage

1. **Install dependencies:**
   ```sh
   cd Login_Backend
   npm install
   ```

2. **Set up a `.env` file:**
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

### API Endpoints

| Method | Endpoint                | Description                     |
|--------|------------------------ |---------------------------------|
| POST   | `/api/user/register`    | Register a new user             |
| POST   | `/api/user/verify-otp`  | Verify OTP for registration     |
| POST   | `/api/user/login`       | Login with email & password     |

#### Example Request Bodies

**Register**
```json
{
  "username": "yourusername",
  "email": "youremail@example.com",
  "password": "yourpassword"
}
```

**Verify OTP**
```json
{
  "email": "youremail@example.com",
  "otp": "123456"
}
```

**Login**
```json
{
  "email": "youremail@example.com",
  "password": "yourpassword"
}
```

---

## Frontend: `login_Frontend`

### Features

- React SPA with login, signup, and verification pages
- Routing with React Router
- Styled using TailwindCSS
- Context API for authentication state
- API integration with backend

### Folder Structure

```
login_Frontend/
  ├── .gitignore
  ├── package.json
  ├── vite.config.js
  ├── README.md
  ├── public/
  └── src/
      ├── App.jsx
      ├── index.css
      ├── main.jsx
      ├── APIConnector.js
      ├── Context/
      │   └── AuthContext.jsx
      ├── Layout/
      │   └── MainLayout.jsx
      └── Pages/
          ├── Home.jsx
          ├── Login.jsx
          ├── SignUp.jsx
          └── Verification.jsx
```

### Setup & Usage

1. **Install dependencies:**
   ```sh
   cd login_Frontend
   npm install
   ```

2. **Start the frontend dev server:**
   ```sh
   npm run dev
   ```
   The app runs on [http://localhost:5173](http://localhost:5173) by default.

---

## Development Notes

- Make sure both backend and frontend servers are running for full functionality.
- Adjust CORS and API endpoints as needed for deployment.
- The backend implements user registration, login, and OTP verification.
- The frontend pages are set up for navigation and UI; connect them to backend APIs for full authentication flow.
- Change sensitive credentials immediately if `.env` was ever pushed to a public repo.

---
 