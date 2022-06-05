const DB = require('../utils/db');

class User {
    email; 
    firstName;
    lastName;
    password;
    dateOfBirth;
    friendsList;
    image;
    gamesList;
    ordersList;
    level;
    isActive;

    constructor(email = "", firstName = "", lastName = "", password = "", dateOfBirth = "", friendsList = [],
                image = "", gamesList = [], ordersList = [], level = "") 
                {
                    this.email = email;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.password = password;
                    this.dateOfBirth = dateOfBirth;
                    this.friendsList = friendsList;
                    this.image = image;
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

    async GeUserByID(id) {
        try {
            return await new DB().FindByID('user', id);
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

    async UpdateUserById(id) {
        try {
            return await new DB().UpdateDocById('user', id, this);
        } catch (error) {
            console.log(error);
            return error;
        } 
    }

    async DeleteUser(id) {
        try {
            return await new DB().DeactivateDocById('user',id);
        } catch (error) {
            return error;
        }
    }
}

module.exports = User;