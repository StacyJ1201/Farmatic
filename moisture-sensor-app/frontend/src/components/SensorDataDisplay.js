import React, { useState, useEffect } from "react";
import axios from "axios";

const SensorDataDisplay = () => {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8081/api/sensor-data"
        );
        setSensorData(response.data[0]); // Get the most recent data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching sensor data:", err);
        setError("Could not fetch sensor data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();

    // Fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading sensor data...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!sensorData) {
    return <div className="text-center py-10">No sensor data available.</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
      <h2 className="text-xl font-bold mb-4">Soil Moisture Reading</h2>

      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-semibold">Moisture Level:</span>{" "}
          {sensorData.moistureLevel}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Timestamp:</span>{" "}
          {new Date(sensorData.timestamp).toLocaleString()}
        </p>
      </div>

      <div className="mt-4">
        {sensorData.isOptimalForPlanting ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
            <p className="font-bold">Good news!</p>
            <p>
              The soil is optimal for planting. Go ahead and plant your seeds!
            </p>
          </div>
        ) : (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
            <p className="font-bold">Not quite ready</p>
            <p>
              The soil moisture isn't optimal for planting yet. Consider
              adjusting the moisture level.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SensorDataDisplay;
