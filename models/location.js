const DB = require('../utils/db');

class Locaiton {
    beachName;
    court;
    isActive;

    constructor(beachName = "", court = "") {
        this.beachName = beachName;
        this.court = court;
        this.isActive = true;
    }

    async GetAllActiveLocation() {
        try {
            return await new DB().FindAll('location', { isActive: true });
        } catch (error) {
            return error;
        }
    }

    async GetAllLocation() {
        try {
            return await new DB().FindAll('location');
        } catch (error) {
            return error;
        }
    }

    async GetCourtByID(id) {
        try {
            return await new DB().FindByID('location', id);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async InsertNewCourt() {
        try {
            return await new DB().Insert('location', this); 
        } catch (error) {
            return error;
        } 
    }

    async UpdateCourtById(id) {
        try {
            return await new DB().UpdateDocById('location', id, this);
        } catch (error) {
            console.log(error);
            return error;
        } 
    }

    async DeleteCourt(id) {
        try {
            return await new DB().DeactivateDocById('location',id);
        } catch (error) {
            return error;
        }
    }
}

module.exports = Locaiton;