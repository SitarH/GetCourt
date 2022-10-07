const { options } = require('../Routers/user');
const DB = require('../utils/db');

class User {
    phoneNumber;
    firstName;
    lastName;
    password;
    dateOfBirth;
    friendsList;
    gamesList;
    ordersList;
    level;
    isActive;

    constructor(phoneNumber, firstName, lastName, password, dateOfBirth, friendsList,
        gamesList, ordersList, level) {
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.friendsList = friendsList;
        this.gamesList = gamesList;
        this.ordersList = ordersList;
        this.level = level;
        this.isActive = true;
    }

    async GetAllActiveUser() {
        try {
            return await new DB().FindAll('user', { isActive: true });
        } catch (error) {
            return error;
        }
    }

    async GetAllUser() {
        try {
            return await new DB().FindAll('user');
        } catch (error) {
            return error;
        }
    }

    async GetAllGameOrders() {
        try {
            let options = { gamesList: { $exists: true, $not: { $size: 0 } } };
            let project = { _id: 0, 'gamesList.date': 1, 'gamesList.time': 1, 'gamesList.location': 1, 'gamesList.court': 1, 'gamesList.players.firstName': 1, 'gamesList.players.lastName': 1 };
            return await new DB().FindAllAndProject('user', options, project);
        } catch (error) {
            return error;
        }
    }

    async GetUserByID(id) {
        try {
            return await new DB().FindByID('user', id);
        } catch (error) {
            console.log(error);
            return error;
        }
    }


    async UserLogin(phoneNum, password) {
        try {
            return await new DB().FindForLogin('user', phoneNum, password);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async InsertNewUser() {
        try {
            return await new DB().Insert('user', this);
        } catch (error) {
            return error;
        }
    }

    async UpdateUserById(id, user = null) {
        try {
            let doc = {};
            let isUpdate = false;
            for (let key in user) {
                if (user[key] != null || user[key] != undefined) {
                    doc[key] = user[key];
                    isUpdate = true;
                }
            }
            console.log(doc);
            return await new DB().UpdateDocById('user', id, isUpdate ? doc : null);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async FindUsersFriends(phoneNumber) {
        try {
            let options = [


                { $unwind: '$friendsList' },
                {
                    $lookup: {
                        from: 'user',
                        localField: 'friendsList',
                        foreignField: '_id',
                        pipeline: [
                            { $project: { 'firstName': 1, 'lastName': 1 } }
                        ],
                        as: 'friendsInfo'
                    }
                },
                { $project: { 'phoneNumber': 1, 'friendsInfo': 1 } },
                { $match: { 'phoneNumber': phoneNumber } }
            ];
            return await new DB().Aggregate('user', options);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    // async UpdateUserById(user, id) {
    //     try {
    //         return await new DB().UpdateDocById('user', id, user);
    //     } catch (error) {
    //         console.log(error);
    //         return error;
    //     } 
    // }

    async DeleteUser(id) {
        try {
            return await new DB().DeactivateDocById('user', id);
        } catch (error) {
            return error;
        }
    }
}

module.exports = User;