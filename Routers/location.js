const express = require('express');
const LocationRouter = express.Router();

const LocationController = require('../Controllers/locationController');

LocationRouter.get("/", LocationController.LocationGetAllActive); 

LocationRouter.get("/:id", LocationController.LocationGetById);

LocationRouter.post("/add", LocationController.AddLocation); 

LocationRouter.put("/:id", LocationController.UpdateLocation); 

LocationRouter.delete("/:id", LocationController.DeleteLocation);

module.exports = LocationRouter;