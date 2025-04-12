class SensorController {
    constructor(SensorData) {
        this.SensorData = SensorData;
    }

    async getSensorData(req, res) {
        try {
            const data = await this.SensorData.find();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving sensor data', error });
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
            res.status(400).json({ message: 'Error saving sensor data', error });
        }
    }
}

export default SensorController;