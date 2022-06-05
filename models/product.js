
const DB = require('../Utils/db');

class Product {
    name;
    price;
    category;
    size;
    sku;
    stock;
    description;
    isActive;

    constructor(name, price, category, size, sku, stock, description) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.size = size;
        this.sku = sku;
        this.stock = stock;
        this.description = description;
        this.isActive = true;
    }

    async GetAllActiveProducts() {
        try {
            return await new DB().FindAll('product', { isActive: true });
        } catch (error) {
            return error;
        }
    }

    async GetAllProducts() {
        try {
            return await new DB().FindAll('product');
        } catch (error) {
            return error;
        }
    }

    async GetProductByID(id) {
        try {
            return await new DB().FindByID('product', id);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async InsertNewProduct() {
        try {
            return await new DB().Insert('product', this); 
        } catch (error) {
            return error;
        } 
    }

    async UpdateProductById(id) {
        try {
            return await new DB().UpdateDocById('product', id, this);
        } catch (error) {
            console.log(error);
            return error;
        } 
    }

    async DeleteProduct(id) {
        try {
            return await new DB().DeactivateDocById('product',id);
        } catch (error) {
            return error;
        }
    }
}

module.exports = Product;