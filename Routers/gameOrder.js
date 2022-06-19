const express = require('express');
const GameOrderRouter = express.Router();

const GameOrderController = require('../Controllers/gameOrderController');

GameOrderRouter.get("/", GameOrderController.GameOrderGetAllActive); 

GameOrderRouter.get("/:id", GameOrderController.GameOrderGetById);

GameOrderRouter.post("/add", GameOrderController.AddGameOrder); 

GameOrderRouter.put("/:id", GameOrderController.UpdateGameOrder); 

GameOrderRouter.delete("/:id", GameOrderController.DeleteGameOrder);

module.exports = GameOrderRouter;