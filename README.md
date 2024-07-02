# Task-Manager-ByteBux

A simple task management application built with React, Node.js, Express, and MongoDB.

## Features

- Add, update, and delete tasks
- View tasks in a tabular format
- Mark tasks as completed or pending

## Technologies Used

- React
- Node.js
- Express
- MongoDB
- Mongoose
- Axios

## Prerequisites

Make sure you have the following installed:

- Node.js (v20.11.1)
- MongoDB

## Installation

1. Clone the repository

     https://github.com/Rizraizada/Task-Manager...-ByteBux.git
     cd task-manager-app
    ```

2. Navigate to the frontend directory and install dependencies

     cd frontend
    npm install
    ```

3. Navigate to the backend directory and install dependencies

     cd ../backend
    npm install
    ```

## Running the Application

### Running the Frontend

1. Navigate to the frontend directory

    ```bash
    cd frontend
    ```

2. Start the frontend server

    ```bash
    npm start
    ```

   The frontend will run on `http://localhost:3000`.

### Running the Backend

1. Navigate to the backend directory

    ```bash
    cd backend
    ```

2. Start the backend server

    ```bash
    npm start
    ```

   The backend will run on `http://localhost:5000`.

### Running Frontend and Backend Concurrently

1. Navigate to the root directory of the project

    ```bash
    cd task-manager-app
    ```

2. Start both the frontend and backend servers concurrently

    ```bash
    npm start
    ```

   This will run both the frontend and backend servers.

## API Endpoints

### Tasks

#### Get All Tasks

- **URL:** `/api/tasks`
- **Method:** `GET`
- **Description:** Retrieve all tasks.
- **Response:**
  - `200 OK` - Returns an array of tasks.

#### Get Task by ID

- **URL:** `/api/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieve a task by its ID.
- **Response:**
  - `200 OK` - Returns the task object.
  - `404 Not Found` - Task not found.

#### Create a Task

- **URL:** `/api/tasks`
- **Method:** `POST`
- **Description:** Create a new task.
- **Body Parameters:**
  - `title` (string, required)
  - `description` (string, required)
  - `completed` (boolean, optional)
- **Response:**
  - `201 Created` - Returns the created task object.
  - `400 Bad Request` - Invalid input.

#### Update a Task

- **URL:** `/api/tasks/:id`
- **Method:** `PUT`
- **Description:** Update a task by its ID.
- **Body Parameters:**
  - `title` (string, required)
  - `description` (string, required)
  - `completed` (boolean, optional)
- **Response:**
  - `200 OK` - Returns the updated task object.
  - `400 Bad Request` - Invalid input.
  - `404 Not Found` - Task not found.

#### Delete a Task

- **URL:** `/api/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID.
- **Response:**
  - `200 OK` - Task successfully deleted.
  - `404 Not Found` - Task not found.

 
 
