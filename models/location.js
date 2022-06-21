const DB = require('../Utils/db');

class Location {
    beachName;
    courtNum;
    isActive;

    constructor(beachName, courtNum) {
        this.beachName = beachName;
        this.courtNum = courtNum;
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

    async GetLocationByID(id) {
        try {
            console.log('hi');
            return await new DB().FindByID('location', id);
            
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async InsertNewLocation() {
        try {
            return await new DB().Insert('location', this); 
        } catch (error) {
            return error;
        } 
    }

    async UpdateLocationById(id) {
        try {
            return await new DB().UpdateDocById('location', id, this);
        } catch (error) {
            console.log(error);
            return error;
        } 
    }

    async DeleteLocation(id) {
        try {
            return await new DB().DeactivateDocById('location',id);
        } catch (error) {
            return error;
        }
    }
}

module.exports = Location;