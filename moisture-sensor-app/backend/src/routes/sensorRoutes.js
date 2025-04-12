import express from "express";

const sensorRoutes = (sensorController) => {
  const router = express.Router();

  router.get("/", (req, res) => sensorController.getSensorData(req, res));
  router.post("/", (req, res) => sensorController.postSensorData(req, res));

  return router;
};

export default sensorRoutes;
