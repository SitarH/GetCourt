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
            
            return await new DB().FindByID('location', id);
            
        } catch (error) {

            return error;
        }
    }

    async GetHoursByLocationAndDate(location, date){
        try {
            let options = [{$project: {'_id':0,'gamesList.location':1,'gamesList.time': 1, 'gamesList.date': 1}},{$unwind: '$gamesList'}]
            let arr = await new DB().Aggregate('user', options);
            const ArrByDateLoc = arr.filter(game => game.gamesList.location === location && game.gamesList.date == date);
            const availableHours = ArrByDateLoc.map(game => game.gamesList.time)

            return availableHours;
        } catch (error) {
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