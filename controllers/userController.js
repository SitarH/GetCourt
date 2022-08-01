const User = require('../models/user');
// const UserRouter = require('express').Router();

//CRUD routes

exports.UserGetAllActive = async (req, res) => {
    try {
        let allUser = await new User().GetAllActiveUser();
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.UserGetById = async (req, res) => {
    let { id } = req.params;

    try {
        let user = await new User().GetUserByID(id);
        if (user._id === undefined)
            res.status(404).json({ message: 'user not found', user });
        else
            res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'undefine' });
    }
};


exports.AddUser = async (req, res) => {
    /*
     * setp 0: make sure to require the model class
     * step 1: get the data from the req.body 
     * step 2: create a ne instance of the class
     * step 3: connect to DB
     * step 4: insert the record
     */
    let { email, firstName, lastName, password, dateOfBirth, friendsList,
        gamesList, ordersList, level } = req.body;
    let user = new User(email, firstName, lastName, password, dateOfBirth, friendsList,
         gamesList, ordersList, level);

    try {
        let result = await user.InsertNewUser();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error })
    }
};

//add object into array in user object
exports.AddGameToUser = async (req, res) => {
    // { $push: { <field1>: <value1>, ... } }
    let { field, value } = req.body;

    try {  
        let result = await user.InsertNewUser();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error })
    }
};

exports.AddPaymentToUser = async (req, res) => {
    // { $push: { <field1>: <value1>, ... } }
    let {  enteredCreditCard, enteredExpirationDate, enteredCVV } = req.body;
    let {id} = req.params;
    console.log('hi from server')
    try {  
        let user = await new User().GetUserByID(id);
        let payments = user.payments || [] 
        payments.push({enteredCreditCard, enteredExpirationDate, enteredCVV });
        user.payments = payments;
        await new User().UpdateUserById(user, id);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error })
    }
};

exports.UpdateUser = async (req, res) => {
    let { id } = req.params;
    console.log('hi')
    let { email, firstName, lastName, password, dateOfBirth, friendsList,
        gamesList, ordersList, level } = req.body;
    try {
        let result = await new User(email, firstName, lastName, password, dateOfBirth, friendsList,
            
             gamesList, ordersList, level).UpdateUserById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
};


exports.DeleteUser = async (req, res) => {
    let { id } = req.params;
    try {
        let result = await new User().DeleteUser(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
};

