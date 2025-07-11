# Login System Project

This project is a full-stack login system consisting of a backend (Node.js/Express/MongoDB) and a frontend (React/Vite/TailwindCSS). It provides user authentication, registration, and verification flows.

## Project Structure

- `Login_Backend/` — Node.js/Express backend with MongoDB for user management
- `login_Frontend/` — React frontend built with Vite and styled with TailwindCSS

---

## Backend: `Login_Backend`

### Features
- REST API for user registration (login and verification endpoints can be added)
- MongoDB database connection
- CORS and cookie support

### Folder Structure
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
      │   └── User.model.js
      ├── routes/
      │   └── User.route.js
      └── utils/
          ├── ApiError.js
          ├── ApiResponse.js
          └── asyncHandler.js
```

### Setup & Usage
1. Install dependencies:
   ```bash
   cd Login_Backend
   npm install
   ```
2. Set up a `.env` file with your MongoDB connection string:
   ```env
   MONGO_DB=your_mongodb_connection_url
   ```
   > **Note:** The default `.env` uses a MongoDB Atlas connection string. Update it as needed.
3. Start the backend server:
   ```bash
   npm run dev
   ```
   The server runs on [http://localhost:3000](http://localhost:3000).

---

## Frontend: `login_Frontend`

### Features
- React SPA with login, signup, and verification pages
- Routing with React Router
- Styled using TailwindCSS

### Folder Structure
```
login_Frontend/
  ├── .gitignore
  ├── eslint.config.js
  ├── index.html
  ├── package.json
  ├── vite.config.js
  ├── public/
  └── src/
      ├── App.jsx
      ├── index.css
      ├── main.jsx
      ├── assets/
      ├── Layout/
      │   └── MainLayout.jsx
      └── Pages/
          ├── Home.jsx
          ├── Login.jsx
          ├── SignUp.jsx
          └── Verification.jsx
```

### Setup & Usage
1. Install dependencies:
   ```bash
   cd login_Frontend
   npm install
   ```
2. Start the frontend dev server:
   ```bash
   npm run dev
   ```
   The app runs on [http://localhost:5173](http://localhost:5173) by default.

---

## Development Notes

- Make sure both backend and frontend servers are running for full functionality.
- Adjust CORS and API endpoints as needed for deployment.
- The backend currently implements only user registration. Add login and verification logic as needed.
- The frontend pages are set up for navigation and UI; connect them to backend APIs for full authentication flow.

---
