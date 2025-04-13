# Moisture Sensor Project 🌱💧

Hey there! This is my cool project that connects an Arduino moisture sensor to a web app so you can see if your plants need water. It shows different pictures based on if the soil is too dry, too wet, or just right!

## What it does
* Reads moisture data from an Arduino sensor
* Shows the data on a nice web page with cool pictures
* Tells you if you need to water your plants or not

## How to set it up

### What you need first
* Arduino with a moisture sensor
* Node.js (I used v16+)
* MongoDB
* npm

### Setting up the backend
1. Clone this repo:
   ```
   git clone https://github.com/your-username/moisture-sensor-app.git
   cd moisture-sensor-app/backend
   ```

2. Install the packages:
   ```
   npm install
   ```

3. Start MongoDB if it's not already running:
   ```
   mongod
   ```

4. Run the backend:
   ```
   npm start
   ```
   The server will start on http://localhost:8081

### Connecting the Arduino
1. Upload the Arduino sketch to your board (find it in the arduino_code folder)

2. Find your Arduino port:
   ```
   # Mac/Linux:
   ls /dev/tty.*
   
   # Windows:
   Check Device Manager > Ports (COM & LPT)
   ```

3. Update the port in the arduinoToBackend.js file if needed

4. Run the connection script:
   ```
   cd moisture-sensor-app/backend
   node src/arduinoToBackend.js
   ```
   You should see moisture readings printing in the console!

### Setting up the frontend
1. Open a new terminal:
   ```
   cd moisture-sensor-app/frontend
   npm install
   npm start
   ```

2. The app will open in your browser at http://localhost:3000

## How it works
* The Arduino reads soil moisture and sends it to the Node.js backend
* The backend saves the data in MongoDB
* The React frontend fetches the latest data and shows the right image:
   * Desert image if the soil is too dry 🏜️
   * Rain image if the soil is too wet 🌧️
   * Perfect garden image if moisture is just right 🌿

## Screenshots
(I'll add screenshots later when everything looks perfect!)

## Known issues
* Sometimes the Arduino connection drops, just restart the script
* App looks weird on really small phones
* The images might take a second to load

## Future stuff I want to add
* [ ] Email alerts when soil is too dry
* [ ] Multiple sensors support
* [ ] Historical data charts
* [ ] Dark mode!

## Made with
* React
* Node.js
* MongoDB
* Arduino
* Lots of coffee ☕

## License
Do whatever you want with this I guess! Just be cool and give me credit.

This is my first big project so be nice! Let me know if you have any questions or suggestions! 😊
