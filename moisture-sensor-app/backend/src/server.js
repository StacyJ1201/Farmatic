import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import SensorData from "./models/sensorData.js";
import SensorController from "./controllers/sensorController.js";
import sensorRoutes from "./routes/sensorRoutes.js";

const app = express();
const PORT = 8081;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose
  .connect("mongodb://localhost:27017/moistureSensorDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Add a root route
app.get("/", (req, res) => {
  res.send("Welcome to the Moisture Sensor API!");
});

// Initialize controller
const sensorController = new SensorController(SensorData);

// Routes
app.use("/api/sensor-data", sensorRoutes(sensorController));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
