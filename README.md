# FlockShop.ai Collaborative Wishlist App

This project is a full-stack application for creating and sharing collaborative shopping wishlists. Multiple users can create wishlists, add products, and invite collaborators.

## Setup Instructions

1. Prerequisites
   - Node.js (>=14.x)
   - npm (>=6.x)
   - MongoDB (local or Atlas)
2. Backend
   ```bash
   cd backend
   npm install
   # create a .env file with:
   # MONGODB_URI=<your MongoDB connection string>
   # JWT_SECRET=<your_jwt_secret>
   npm run dev
   ```
3. Frontend
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. Access the app
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api

## Tech Stack Used

- Frontend:
  - React 18
  - Vite
  - Tailwind CSS v3
  - Axios for HTTP requests
  - React Router
- Backend:
  - Node.js
  - Express
  - MongoDB with Mongoose
  - JSON Web Tokens (JWT) for auth
  - express-async-errors
- Dev Tools:
  - ESLint
  - Prettier
  - dotenv for environment variables

## Assumptions & Limitations

- Authentication is implemented via JWT stored in localStorage (not HttpOnly cookie).
- No real-time updates (WebSockets) implemented.
- Collaborators are added via comma-separated emails; invitations are mocked.
- Input validation is basic; In future, should include more thorough checks and sanitization.
- Error handling returns generic messages; consider improving UX for edge cases.
