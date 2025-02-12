Warehouse Management System

📌 Overview

This project is a Warehouse Management System that integrates a backend API with a frontend application to manage warehouses, agents, and orders. The system allows users to:

Fetch warehouse, agent, and order data from the backend.

Assign orders to warehouses.

Display the data in a structured frontend table.

🚀 Technologies Used

Backend

Node.js with Express.js for API development.

MySQL for data storage.

Axios for making HTTP requests.

Frontend

React.js for building the user interface.

Axios for fetching API data.

React Table (or any other UI table library) for displaying data.

📡 API Endpoints

The backend API is hosted on http://localhost:5000. Below are the key endpoints:

GET/warehouses/
Fetches all warehouses

GET/agents/
Fetches all agents

GET/orders/
Fetches all orders

POST/orders/assign
Assigns orders to a warehouse

🔧 Backend Setup

Clone the repository:
git clone <your-repo-url>
cd backend

Install dependencies:

npm install

Start the backend server:

npm start

The API will run at http://localhost:5000.

🎨 Frontend Setup

Navigate to the frontend directory:

cd frontend

Install dependencies:
npm install
Start the frontend application:
npm start
The React app will run at http://localhost:3000.

🔗 Connecting Backend with Frontend
The frontend fetches data using Axios from the backend (http://localhost:5000).
