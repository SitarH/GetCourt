const express = require('express');
const LocationRouter = express.Router();

const LocationController = require('../controllers/locationController');

LocationRouter.get("/", LocationController.LocationGetAllActive); 

LocationRouter.get("/:id", LocationController.LocationGetById);

LocationRouter.post("/add", LocationController.AddLocation);

LocationRouter.post("/availableHours", LocationController.GetGameByLocationAndDate);

LocationRouter.post("/NextAvailableGames", LocationController.NextAvailableGames);

LocationRouter.put("/:id", LocationController.UpdateLocation); 

LocationRouter.delete("/:id", LocationController.DeleteLocation);

module.exports = LocationRouter;