const express = require('express');
const CourtRouter = express.Router();

const CourtController = require('../Controllers/courtController');

CourtRouter.get("/", CourtController.CourtsGetAllActive); 

CourtRouter.get("/:id", CourtController.CourtsGetById);

CourtRouter.post("/add", CourtController.AddCourt); 

CourtRouter.put("/:id", CourtController.UpdateCourt); 

CourtRouter.delete("/:id", CourtController.DeleteCourt);

module.exports = CourtRouter;
