import React, { useEffect, useState } from "react";
import axios from "axios";

const SensorDataDisplay = () => {
  const [sensorData, setSensorData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/sensor-data"
        );
        setSensorData(response.data);
      } catch (err) {
        setError("Error fetching sensor data");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Moisture Sensor Data</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {sensorData.map((data) => (
          <li key={data._id}>
            Moisture Level: {data.moistureLevel}, Timestamp:{" "}
            {new Date(data.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SensorDataDisplay;
