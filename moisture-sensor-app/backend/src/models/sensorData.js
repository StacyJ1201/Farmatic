import mongoose from "mongoose";

const sensorDataSchema = new mongoose.Schema({
  moistureLevel: {
    type: Number,
    required: true,
  },
  isOptimalForPlanting: {
    type: Boolean,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const SensorData = mongoose.model("SensorData", sensorDataSchema);

export default SensorData;
