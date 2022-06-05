const DB = require('../utils/db');

class WaitingList {
    players;
    isActive;

    constructor(players) {
        this.players = players;
        this.isActive = true;
    }

    async GetAllActiveWaitingList() {
        try {
            return await new DB().FindAll('waitingList', { isActive: true });
        } catch (error) {
            return error;
        }
    }

    async GetAllWaitingList() {
        try {
            return await new DB().FindAll('waitingList');
        } catch (error) {
            return error;
        }
    }

    async GetWaitingListByID(id) {
        try {
            return await new DB().FindByID('waitingList', id);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async InsertNewWaitingList() {
        try {
            return await new DB().Insert('waitingList', this); 
        } catch (error) {
            return error;
        } 
    }

    async UpdateWaitingListById(id) {
        try {
            return await new DB().UpdateDocById('waitingList', id, this);
        } catch (error) {
            console.log(error);
            return error;
        } 
    }

    async DeleteWaitingList(id) {
        try {
            return await new DB().DeactivateDocById('waitingList',id);
        } catch (error) {
            return error;
        }
    }
}

module.exports = WaitingList;