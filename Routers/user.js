const express = require('express');
const UserRouter = express.Router();

const UserController = require('../Controllers/userController');

UserRouter.get("/", UserController.UserGetAllActive);

UserRouter.get("/:id", UserController.UserGetById);

UserRouter.post("/add", UserController.AddUser);

UserRouter.put("/:id", UserController.UpdateUser);

UserRouter.post("/payment/:id", UserController.AddPaymentToUser);

UserRouter.delete("/:id", UserController.DeleteUser);

module.exports = UserRouter;