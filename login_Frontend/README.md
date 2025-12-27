# Login Frontend

A modern React-based frontend application for user authentication and management, featuring login, signup, and OTP verification functionality.

## Features

- **User Authentication**: Secure login and signup system
- **OTP Verification**: Email-based verification for account security
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **React Router**: Client-side routing for seamless navigation
- **Context API**: Global state management for authentication
- **Axios Integration**: HTTP client for API communication

## Tech Stack

- **React 19**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Declarative routing for React
- **Axios**: Promise-based HTTP client
- **React OTP Input**: Customizable OTP input component
- **React Icons**: Popular icon library

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager
- The backend server running on `http://localhost:3000`

## Installation

1. Clone the repository and navigate to the frontend directory:
   ```bash
   cd login_Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── APIConnector.js          # Axios configuration for API calls
├── App.jsx                  # Main application component with routing
├── main.jsx                 # Application entry point
├── index.css                # Global styles and Tailwind imports
├── assets/                  # Static assets
├── Context/
│   └── AuthContext.jsx      # Authentication context provider
├── Pages/
│   ├── Home.jsx            # Home page component
│   ├── Login.jsx           # Login page component
│   ├── SignUp.jsx          # Signup page component
│   └── Verification.jsx    # OTP verification page component
```

## API Integration

The frontend communicates with the backend API at `http://localhost:3000/api/user`. Make sure the backend server is running before starting the frontend.

Key API endpoints used:
- User registration
- User login
- OTP verification
- User data retrieval

## Development

This project uses:
- **ESLint** for code linting
- **Vite** for fast development and building
- **Tailwind CSS** for styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test your changes
6. Submit a pull request

## License

This project is private and proprietary.