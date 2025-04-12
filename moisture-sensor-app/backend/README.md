# Moisture Sensor App - Backend

## Overview
This is the backend for the Moisture Sensor App, which collects and serves moisture sensor data from an Arduino device. The backend is built using Node.js, Express, and MongoDB.

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd moisture-sensor-app/backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure the database**
   - Update the MongoDB connection string in `src/config/db.js` to point to your MongoDB instance.

4. **Start the server**
   ```
   npm start
   ```

## API Endpoints

### Get Sensor Data
- **Endpoint:** `GET /api/sensors`
- **Description:** Retrieves the latest moisture sensor data.

### Post Sensor Data
- **Endpoint:** `POST /api/sensors`
- **Description:** Saves new moisture sensor data to the database.
- **Request Body:**
  ```json
  {
    "moistureLevel": <number>,
    "timestamp": "<ISO 8601 date string>"
  }
  ```

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose

## Author
Stacy Jones

## License
This project is licensed under the MIT License.