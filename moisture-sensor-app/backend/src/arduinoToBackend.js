import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";
import axios from "axios";

// Replace '/dev/ttyUSB0' with your Arduino's serial port
const port = new SerialPort("/dev/ttyUSB0", { baudRate: 9600 });

// Use a parser to read lines of data
const parser = port.pipe(new Readline({ delimiter: "\n" }));

// Open the port
port.on("open", () => {
  console.log("Serial port opened");
});

// Read data from the Arduino and send it to the backend
parser.on("data", async (data) => {
  console.log("Moisture Sensor Value:", data);

  try {
    // Send the data to your backend API
    const response = await axios.post("http://localhost:5000/api/sensor-data", {
      moistureLevel: parseInt(data, 10), // Convert string to integer
    });
    console.log("Data sent to backend:", response.data);
  } catch (error) {
    console.error("Error sending data to backend:", error.message);
  }
});
