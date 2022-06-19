const Product = require('../Models/product');
// const ProductRouter = require('express').Router();

//CRUD routes

exports.ProductGetAllActive = async (req, res) => {
         try {
             let allProducts = await new Product().GetAllActiveProducts();
             res.status(200).json(allProducts);
         } catch (error) {
             res.status(500).json({ error });
         }
     };


     exports.ProductGetById = async (req, res) => {
             let { id } = req.params;
        
             try {
                 let product = await new Product().GetProductByID(id);
                 if (product === undefined) 
                     res.status(404).json({ message: 'product not found', product });
                 else
                     res.status(200).json(product);
             } catch (error) {
                 res.status(500).json({message : 'undefine product' });
                
             }
         };

         exports.AddProduct = async (req, res) => {
                 /*
                  * setp 0: make sure to require the model class
                  * step 1: get the data from the req.body 
                  * step 2: create a ne instance of the class
                  * step 3: connect to DB
                  * step 4: insert the record
                  */
                 let { name, price, category, size, sku, stock, description } = req.body;
                 let product = new Product(name, price, category, size, sku, stock, description);
            
                 try {
                     let result = await product.InsertNewProduct();
                     res.status(201).json(result);
                 } catch (error) {
                     res.status(500).json({ error })
                 }
             };


             exports.UpdateProduct =  async (req, res) => {
                     let {id} = req.params;
                     let {name, price, category, size, sku, stock, description} = req.body;
                     try {
                         let result = await new Product(name, price, category, size, sku, stock, description).UpdateProductById(id);
                         res.status(200).json(result);
                     } catch (error) {
                         res.status(500).json({ error });
                     }
                 };


                 exports.DeleteProduct = async (req, res) => {
                         let {id} = req.params;
                         try {
                             let result = await new Product().DeleteProduct(id);
                             res.status(200).json(result);
                         } catch (error) {
                             es.status(500).json({ error });
                         }
                     };