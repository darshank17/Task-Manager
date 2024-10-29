# Task-Manager

This is a simple Task Manager App Build With MERN Stack
Author : Darshan Kotecha

Task Management Website Documentation

1. Introduction
   The Task Management website is designed for efficient task organization. Users can create, manage, and categorize tasks seamlessly.
2. Technology Stack
   Frontend: React, Vite
   Backend: Node.js, Express.js
   Database: MongoDB (using Mongoose)
   Authentication: JWT
3. Features
   User registration and login
   CRUD operations for tasks
   Task categorization
   Responsive design
4. Installation
   Clone the repository:
   git clone <repository-url>
   cd Task-Manager

Set up the backend:
cd Server
npm install

Set up environment variables in .env:
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000

Start the backend:
node server.js

Set up the frontend:
cd ../FrontEnd
npm install
npm run dev

5. Folder Structure
   FrontEnd

FrontEnd/
├── public/
│ └── vite.svg # Vite logo
├── src/
│ ├── api/ # Contains API calls
│ │ └── axios.js # Axios configuration for HTTP requests
│ ├── assets/ # Static assets
│ │ └── react.svg # React logo
│ ├── components/ # React components
│ │ ├── Login.jsx # Login component
│ │ ├── LogOut.jsx # Logout Component
│ │ ├── Register.jsx # Registration component
│ │ ├── TaskForm.jsx # Component for creating/editing tasks
│ │ ├── TaskList.jsx # Component for displaying the list of tasks
│ │ └── TasksDetails.jsx # Component for displaying task details
│ ├── App.css # Global CSS styles
│ ├── App.jsx # Main application component
│ ├── index.css # Styles for index
│ ├── main.jsx # Entry point for the React app
│ ├── README.md # Frontend documentation
│ ├── eslint.config.js # ESLint configuration
│ ├── index.html # Main HTML file
│ ├── package-lock.json # Lock file for frontend dependencies
│ └── package.json # Frontend dependencies and scripts
│ ├── postcss.config.js # PostCSS configuration
│ └── tailwind.config.js # Tailwind CSS configuration
│ └── vite.config.js # Vite configuration

Server

Server/
├── config/ # Configuration files
│ └── db.js # Database connection configuration
├── controllers/ # Controllers for handling requests
│ ├── authController.js # User authentication logic
│ └── taskController.js # Task management logic
├── middleware/ # Middleware functions
│ └── authMiddleware.js # Middleware for authentication
├── models/ # Database models
│ ├── Task.js # Task model
│ └── User.js # User model
├── routes/ # API routes
│ ├── auth.js # Authentication routes
│ └── taskRoutes.js # Task management routes
├── .env # Environment variables
├── package-lock.json # Lock file for server dependencies
├── package.json # Server dependencies and scripts
├── server.js # Main server file
└── .gitignore # Files to ignore in version control
└── README.md # Server documentation

6. API Endpoints
   Authentication
   POST /api/auth/signup - Register a new user
   POST /api/auth/login - Log in an existing user
   Tasks
   GET /api/tasks - Retrieve all tasks
   POST /api/tasks - Create a new task
   PUT /api/tasks/:id - Update a task by ID
   DELETE /api/tasks/:id - Delete a task by ID
7. Frontend Setup
   Components
   Login.jsx, Register.jsx: Authentication forms.
   TaskForm.jsx: Form for adding/editing tasks.
   TaskList.jsx: Displays a list of tasks.
   TasksDetails.jsx: Detailed view of a task.

8. User Interface
   Home Page: Displays tasks and navigation options.
   Login & Register Pages: For user authentication.
   Task Management: Add, edit, delete, and view tasks.
9. Future Improvements
   Task reminders and notifications.
   Integration with third-party APIs.
   Enhanced user experience and interface improvements.
