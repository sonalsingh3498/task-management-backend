# Task Management Backend

This is the backend for the Task Management Application. It provides a RESTful API for managing tasks, including creating, reading, updating, and deleting tasks. The backend is built with Express.js and uses MongoDB as the database.

## Features

- Create new tasks
- Retrieve a list of all tasks
- Retrieve details of a specific task by ID
- Update a task by ID
- Delete a task by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Getting Started
backend/
├── src/
│   ├── config/
│   │   └── connection.js   # Database connection setup
│   ├── controllers/
│   │   └── taskController.js  # Task controller logic
│   ├── models/
│   │   └── taskModel.js   # Mongoose task schema and model
│   ├── routes.js
│   │   
│   └── index.js  # Express app setup
├── package.json
└── README.md


### Prerequisites

- Node.js (v12.x or later)
- npm or yarn
- MongoDB (local)
- Open mongodb and connect it 
### Installation

1. Clone the repository:

```bash

git clone https://github.com/sonalsingh3498/task-management-backend.git
- cd task-management-backend
- npm i
- node index.js
- 