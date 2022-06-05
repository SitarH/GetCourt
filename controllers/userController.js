const User = require('../models/user');
const UserRouter = require('express').Router();

//CRUD routes

UserRouter.get('/user', async (req, res) => {
    try {
        let allUser = await new User().GetAllActiveUser();
        console.log("all active users")
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).json({ error });
    }
});

UserRouter.get('/user/:id', async (req, res) => {
    let { id } = req.params;

    try {
        let user = await new User().GetUserByID(id);
        if (user.id === undefined) 
            res.status(404).json({ message: 'user not found', user });
        else
            res.status(200).json(user);
    } catch (error) {
        console.log('error user')
        res.status(500).json({message : 'undefine' });
    }
});

UserRouter.post('/user/add', async (req, res) => {
    /*
     * setp 0: make sure to require the model class
     * step 1: get the data from the req.body 
     * step 2: create a ne instance of the class
     * step 3: connect to DB
     * step 4: insert the record
     */
    let { email, firstName, lastName, password, dateOfBirth, friendsList,
        image, gamesList, ordersList, level } = req.body;
    let user = new User(email, firstName, lastName, password, dateOfBirth, friendsList,
        image, gamesList, ordersList, level);

    try {
        let result = await user.InsertNewUser();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error })
    }
});

UserRouter.put('/user/:id', async (req, res) => {
    let {id} = req.params;
    let { email, firstName, lastName, password, dateOfBirth, friendsList,
        image, gamesList, ordersList, level } = req.body;
    try {
        let result = await new User( email, firstName, lastName, password, dateOfBirth, friendsList,
            image, gamesList, ordersList, level).UpdateUserById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
});

UserRouter.delete('/user/:id', async (req, res) => {
    let {id} = req.params;
    try {
        let result = await new User().DeleteUser(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
});


module.exports = UserRouter;