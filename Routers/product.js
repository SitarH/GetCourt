const express = require('express');
const ProductRouter = express.Router();

const ProductController = require('../Controllers/productController');

ProductRouter.get("/", ProductController.LocationGetAllActive); 

ProductRouter.get("/:id", ProductController.LocationGetById);

ProductRouter.post("/add", ProductController.AddLocation); 

ProductRouter.put("/:id", ProductController.UpdateLocation); 

ProductRouter.delete("/:id", ProductController.DeleteLocation);

module.exports = ProductRouter;