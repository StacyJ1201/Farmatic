const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
    moistureLevel: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

module.exports = SensorData;