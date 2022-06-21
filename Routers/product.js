const express = require('express');
const ProductRouter = express.Router();

const ProductController = require('../Controllers/productController');

ProductRouter.get("/", ProductController.ProductGetAllActive); 

ProductRouter.get("/:id", ProductController.ProductGetById);

ProductRouter.post("/add", ProductController.AddProduct); 

ProductRouter.put("/:id", ProductController.UpdateProduct); 

ProductRouter.delete("/:id", ProductController.DeleteProduct);

module.exports = ProductRouter;