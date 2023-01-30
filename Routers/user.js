const express = require('express');
const UserRouter = express.Router();

const UserController = require('../controllers/userController');

UserRouter.get("/", UserController.UserGetAllActive);

UserRouter.get("/gameOrders", UserController.UserGetAllGameOrder);

UserRouter.get("/:id", UserController.UserGetById);

UserRouter.post("/add", UserController.AddUser);

UserRouter.post("/login", UserController.UserLogin);

UserRouter.post("/addGame/:id", UserController.AddGameToUser);

UserRouter.put("/:id", UserController.UpdateUser);

UserRouter.post("/payment/:id", UserController.AddPaymentToUser);

UserRouter.post("/AddFriend/:id", UserController.AddFriendToUser);

UserRouter.post("/friends/", UserController.FindUsersFriends);

UserRouter.delete("/:id", UserController.DeleteUser);

module.exports = UserRouter;