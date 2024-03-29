const User = require('../models/user');
const GameOrder = require('../models/gameOrder');

const sid = 'AC8793599c2d2d3795cf7808c4e4b24c37';
const authToken = 'f4263ee900d890a72c5da650c234e62f';

const twilio = require('twilio')(sid, authToken);

//CRUD routes

exports.UserGetAllActive = async (req, res) => {
    try {
        let allUser = await new User().GetAllActiveUser();
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.UserGetAllGameOrder = async (req, res) => {
    try {
        let allGames = await new User().GetAllGameOrders();
        let games = [];
        allGames.map((game) => {
            for (let i = 0; i < game.gamesList.length; i++) {
                games.push(game.gamesList[i]);
            }
        });

        res.status(200).json(games);
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


exports.UserLogin = async (req, res) => {
    
    let { phoneNum, password } = req.body;
    console.log('?',phoneNum, password);
    try {
        let user = await new User().UserLogin(phoneNum, password);
        if (!user)
            res.status(404).json({ message: 'user not found', user });
        else
            res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'undefine' });
    }
};


exports.FindUsersFriends = async (req, res) => {
    let { phoneNum } = req.body;

    try {
        let friends = await new User().FindUsersFriends(phoneNum);
        if (!friends)
            res.status(404).json({ message: 'friends not found', friends });
        else
            res.status(200).json(friends);
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
    let { phoneNumber, firstName, lastName, password, dateOfBirth, friendsList,
        gamesList, ordersList, level } = req.body;
    let user = new User(phoneNumber, firstName, lastName, password, dateOfBirth, friendsList,
        gamesList, ordersList, level);
    console.log(user)

    try {
        let result = await user.InsertNewUser();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error })
    }
};

// //add object into array in user object
// exports.AddGameToUser = async (req, res) => {
//     // { $push: { <field1>: <value1>, ... } }
//     let { field, value } = req.body;


//     try {  
//         let result = await user.InsertNewUser();
//         res.status(201).json(result);
//     } catch (error) {
//         res.status(500).json({ error })
//     }
// };

exports.AddPaymentToUser = async (req, res) => {

    let { enteredCreditCard, enteredExpirationDate, enteredCVV } = req.body;
    let { id } = req.params;

    try {
        let user = await new User().GetUserByID(id);
        let paymentsArr = user.payments || []
        paymentsArr.push({ enteredCreditCard, enteredExpirationDate, enteredCVV });
        user.payments = paymentsArr;
        await new User().UpdateUserById(id, user);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error })
    }
};

exports.AddFriendToUser = async (req, res) => {

    let { friend } = req.body;
    let { id } = req.params;
    try {
        let user = await new User().GetUserByID(id);
        let friendsArr = user.friendsList || []
        friendsArr.push(req.body._id);
        user.friendsList = friendsArr;
        await new User().UpdateUserById(id, user);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error })
    }
};

exports.UpdateUser = async (req, res) => {
    let { id } = req.params;
    try {
        let value = { ...req.body }
       
        let result = await new User().UpdateUserById(id, value);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.AddGameToUser = async (req, res) => {
   
    let { id } = req.params;
    let { date, time, location, court, type, players } = req.body;
 
    try {
        let u = new User();
        let game = new GameOrder(date, time, location, court, type, players);
        let user = await u.GetUserByID(id);
        user.gamesList.push(game);

        await u.UpdateUserById(id, user);
        res.status(200).json(user);
        
        twilio.messages
            .create({
                from: '+13343784350',
                to: '+972526103109',
                body: `YAY YOU GOT IT! ${user.firstName}, this is your order details:
         date: ${date}, 
         time: ${time},
         location: ${location},
         court: ${court}
         HAVE FUN!`
            })
            .then(message => console.log(message.sid))
            .done();

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