const DB = require('../Utils/db');

class GameOrder {
    date;
    time;
    type;
    players;
    court;
    location;
    isActive;

    constructor(date, time, type, players, court, location) {
        this.date = date;
        this.time = time;
        this.type = type;
        this.players = players;
        this.court = court;
        this.location = location;
        this.isActive = true;
    }

    async GetAllActiveGameOrders() {
        try {
            return await new DB().FindAll('gameOrder', { isActive: true });
        } catch (error) {
            return error;
        }
    }

    async GetAllGameOrders() {
        try {
            return await new DB().FindAll('gameOrder');
        } catch (error) {
            return error;
        }
    }

    async GetGameOrdersByID(id) {
        try {
            return await new DB().FindByID('gameOrder', id);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async InsertNewGameOrder() {
        try {
            return await new DB().Insert('gameOrder', this); 
        } catch (error) {
            return error;
        } 
    }

    async UpdateGameOrderById(id) {
        try {
            return await new DB().UpdateDocById('gameOrder', id, this);
        } catch (error) {
            console.log(error);
            return error;
        } 
    }

    async DeleteGameOrder(id) {
        try {
            return await new DB().DeactivateDocById('gameOrder',id);
        } catch (error) {
            return error;
        }
    }
}

module.exports = GameOrder;