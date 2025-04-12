# Moisture Sensor App

This project is a full-stack application that displays moisture sensor data collected from an Arduino device. It consists of a Node.js backend with MongoDB integration and a React frontend.

## Project Structure

```
moisture-sensor-app
├── backend
│   ├── src
│   │   ├── server.js          # Entry point for the Node.js application
│   │   ├── controllers         # Contains controller logic for handling sensor data
│   │   │   └── sensorController.js
│   │   ├── models              # Mongoose models for MongoDB
│   │   │   └── sensorData.js
│   │   ├── routes              # API routes for sensor data
│   │   │   └── sensorRoutes.js
│   │   └── config              # Configuration files
│   │       └── db.js
│   ├── package.json            # Backend dependencies and scripts
│   └── README.md               # Documentation for the backend
├── frontend
│   ├── public
│   │   ├── index.html          # Main HTML file for the React application
│   │   └── favicon.ico         # Favicon for the website
│   ├── src
│   │   ├── App.js              # Main component of the React application
│   │   ├── index.js            # Entry point for the React application
│   │   ├── components          # React components
│   │   │   └── SensorDataDisplay.js
│   │   └── styles              # CSS styles for the React application
│   │       └── App.css
│   ├── package.json            # Frontend dependencies and scripts
│   └── README.md               # Documentation for the frontend
└── README.md                   # Overall documentation for the project
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd moisture-sensor-app
   ```

2. Set up the backend:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Set up your MongoDB connection in `src/config/db.js`.
   - Start the backend server:
     ```
     npm start
     ```

3. Set up the frontend:
   - Navigate to the frontend directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm start
     ```

### API Endpoints

- `GET /api/sensors`: Retrieve moisture sensor data.
- `POST /api/sensors`: Save new moisture sensor data.

### Usage

Once both the backend and frontend are running, you can access the application in your web browser at `http://localhost:3000`. The moisture sensor data will be displayed in the frontend, fetched from the backend API.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.