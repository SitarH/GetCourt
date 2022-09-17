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
            let user = await new DB().FindForLogin('user', phoneNum, password);
            for (let index = 0; index < user.gamesList.length; index++) {
                let players = user.gamesList[index].players
                let playersName = user.gamesList[index]['playersName']
                if(players.length > 0){
                    for (let j = 0; j < players.length; j++) {
                        let p = await new DB().FindByID('user', players[j].toString()); //all info about user
                        if(playersName){
                            user.gamesList[index]['playersName'].push({firstName: p.firstName, lastName: p.lastName})
                        }
                        else{
                            user.gamesList[index]['playersName'] = [{firstName: p.firstName, lastName: p.lastName}]
                        }
                    }
                }
            }
            return user
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
            return await new DB().UpdateDocById('user', id, !user ? this : user);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async FindUsersFriends(phoneNumber) {
        try {
            let options = [
               
                
                {$unwind:'$friendsList'},
                {$lookup:{
                    from:'user',
                    localField: 'friendsList',
                    foreignField: '_id',
                    pipeline:[
                        {$project: {'firstName':1,'lastName':1}}
                    ],
                    as: 'friendsInfo'
                }}, 
                {$project:{'phoneNumber':1,'friendsInfo':1}},
                {$match:{'phoneNumber':phoneNumber}}
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