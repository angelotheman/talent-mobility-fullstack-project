# Todo List Application

This project is a containerized 3-tier Todo List application developed for the Cloud Engineering Pathway Assessment. It consists of a React frontend, a Node.js backend, and a MongoDB database, orchestrated using Docker and Docker Compose.

## Project Structure

- **Frontend**: React application built with Vite, served at `http://localhost:3001`.
- **Backend**: Node.js/Express API, connects to MongoDB, served at `http://localhost:3000`.
- **Database**: MongoDB, stores users and todos, accessible within the Docker network.

## Prerequisites

- **Docker**: Version 24.0 or later.
- **Docker Compose**: Version 2.20 or later.
- **Git**: To clone the repository.
- **Node.js**: Optional, for local development outside Docker (v22 recommended).
- **Operating System**: Linux, macOS, or Windows with WSL2 for optimal Docker performance.

## Setup Instructions

1. Clone the Repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

1. Create .env File:Copy the provided .env.example to .env and update values if needed:

    ```bash
    # MongoDB Configuration
    MONGO_USER=angelo
    MONGO_PASSWORD=mypassword123
    DB_HOST=db
    DB_PORT=27017
    DB_NAME=todos

    # Backend Configuration
    BACKEND_PORT=3000

    # Frontend Configuration
    FRONTEND_PORT=3001
    VITE_API_URL=http://backend:3000/api/
    ```

1. Build and Run Containers

    ```bash
    docker compose up --build
    ```

    - Builds images for frontend, backend, and database.
    - Starts containers, mapping ports 3001 (frontend) and 3000 (backend).
    - Press Ctrl+C to stop, or use docker compose up -d for background mode.

1. Access the Application:

    - **Frontend**: Open http://localhost:3001 in a browser.
    - **Backend API**: Test with curl http://localhost:3000/api/gettodos.
    - **MongoDB**: Connect via docker exec -it db mongosh -u angelo -p mypassword123.

1. Stop Containers:

    ```bash
    docker compose down
    ```

    To remove volumes (reset database), use:

    ```bash
    docker compose down -v
    ```

## Development Notes

Frontend: Built with Vite, uses serve in production. Source in Frontend/.
Backend: Node.js/Express, connects to MongoDB via Mongoose. Source in Backend/.
Database: MongoDB latest, persists data in mongo_data volume.
