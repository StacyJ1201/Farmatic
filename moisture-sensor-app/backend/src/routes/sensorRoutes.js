import express from "express";
import SensorData from "../models/sensorData.js";

const router = express.Router();

// Route to get ALL sensor data
router.get("/sensor-data", async (req, res) => {
  try {
    const allData = await SensorData.find().sort({ timestamp: -1 });
    res.status(200).json(allData);
  } catch (error) {
    console.error("Error retrieving sensor data:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Route to save sensor data sent from Arduino
router.post("/sensor-data", async (req, res) => {
  try {
    const { moistureLevel } = req.body;

    if (moistureLevel === undefined) {
      return res.status(400).json({ message: "Moisture level is required" });
    }

    // Define what constitutes optimal moisture
    const MIN_OPTIMAL_MOISTURE = 300;
    const MAX_OPTIMAL_MOISTURE = 800;

    // Determine if the moisture level is optimal for planting
    const isOptimalForPlanting =
      moistureLevel >= MIN_OPTIMAL_MOISTURE &&
      moistureLevel <= MAX_OPTIMAL_MOISTURE;

    // Create and save the sensor data
    const sensorData = new SensorData({
      moistureLevel,
      isOptimalForPlanting,
      timestamp: new Date(),
    });

    const savedData = await sensorData.save();

    res.status(201).json({
      data: savedData,
      message: "Sensor data saved successfully",
    });
  } catch (error) {
    console.error("Error saving sensor data:", error);
    res
      .status(500)
      .json({ message: "Error saving sensor data", error: error.message });
  }
});

export default router;
