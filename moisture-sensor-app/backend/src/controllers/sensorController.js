import SensorData from "../models/sensorData.js";

// Define what constitutes optimal moisture (you may want to adjust these values)
const MIN_OPTIMAL_MOISTURE = 300;
const MAX_OPTIMAL_MOISTURE = 800;

class SensorController {
  constructor(SensorData) {
    this.SensorData = SensorData;
  }

  async getSensorData(req, res) {
    try {
      const data = await this.SensorData.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving sensor data", error });
    }
  }

  async postSensorData(req, res) {
    const { moistureLevel } = req.body;
    const newSensorData = new this.SensorData({
      moistureLevel,
      timestamp: new Date(),
    });

    try {
      const savedData = await newSensorData.save();
      res.status(201).json(savedData);
    } catch (error) {
      res.status(400).json({ message: "Error saving sensor data", error });
    }
  }
}

export const saveSensorData = async (req, res) => {
  try {
    const { moistureLevel } = req.body;

    if (moistureLevel === undefined) {
      return res.status(400).json({ message: "Moisture level is required" });
    }

    // Determine if the moisture level is optimal for planting
    const isOptimalForPlanting =
      moistureLevel >= MIN_OPTIMAL_MOISTURE &&
      moistureLevel <= MAX_OPTIMAL_MOISTURE;

    // Create and save the sensor data
    const sensorData = new SensorData({
      moistureLevel,
      isOptimalForPlanting,
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
};

export const getLatestSensorData = async (req, res) => {
  try {
    const latestData = await SensorData.findOne().sort({ timestamp: -1 });

    if (!latestData) {
      return res.status(404).json({ message: "No sensor data found" });
    }

    res.status(200).json(latestData);
  } catch (error) {
    console.error("Error retrieving latest sensor data:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default SensorController;
