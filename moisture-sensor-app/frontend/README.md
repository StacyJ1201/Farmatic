# Moisture Sensor App

This project is a full-stack application that displays moisture sensor data from an Arduino. It consists of a Node.js backend with MongoDB integration and a React frontend.

## Frontend

The frontend is built using React and is responsible for displaying the moisture sensor data. It fetches data from the backend API and presents it to the user.

### Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd moisture-sensor-app/frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

   The application will be available at `http://localhost:3000`.

### Folder Structure

- `public/`: Contains static files like `index.html` and `favicon.ico`.
- `src/`: Contains the React components and styles.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.
  - `components/`: Contains reusable components.
    - `SensorDataDisplay.js`: Component for displaying sensor data.
  - `styles/`: Contains CSS files for styling the application.

### API Integration

The frontend communicates with the backend API to fetch and display moisture sensor data. Ensure that the backend server is running to access the data.

### Built With

- React
- Axios (for API requests)

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.