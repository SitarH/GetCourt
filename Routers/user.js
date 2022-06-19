const express = require('express');
const UserRouter = express.Router();

const UserController = require('../Controllers/userController');

UserRouter.get("/", UserController.UserGetAllActive);

UserRouter.get("/:id", UserController.UserGetById);

UserRouter.post("/add", UserController.AddUser);

UserRouter.put("/:id", UserController.UpdateUser);

UserRouter.delete("/:id", UserController.DeleteUser);

module.exports = UserRouter;