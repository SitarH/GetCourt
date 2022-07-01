
const DB = require('../Utils/db');
const ObjectId = require('mongodb').ObjectId;


class Court {
    courtId;
    availableHours;
    isActive;

    constructor(courtId , availableHours) {
        this.courtId = courtId;
        this.availableHours = availableHours;
        this.isActive = true;
    }

    async GetAllActiveCourts() {
        try {
            return await new DB().FindAll('court', { isActive: true });
        } catch (error) {
            return error;
        }
    }

    async GetAllCourts() {
        try {
            return await new DB().FindAll('court');
        } catch (error) {
            return error;
        }
    }

    async GetAllCourtsByArray(arr) {
        try {
            let courtsId = new Array();
            for (let index = 0; index < arr.length; index++) {
                courtsId.push(ObjectId(arr[index]));
            }
            let options = {
                _id: {$in: courtsId}
            }
            return await new DB().FindAll('court', options);
        } catch (error) {
            return error;
        }
    }

    async GetCourtByID(id) {
        try {
            return await new DB().FindByID('court', id );
        } catch (error) {
            return error;
        }
    }

    async InsertNewCourt() {
        try {
            return await new DB().Insert('court', this); 
        } catch (error) {
            return error;
        } 
    }

    async UpdateCourtById(id) {
        try {
            return await new DB().UpdateDocById('court', id, this);
        } catch (error) {
            console.log(error);
            return error;
        } 
    }

    async DeleteCourt(id) {
        try {
            return await new DB().DeactivateDocById('court',id);
        } catch (error) {
            return error;
        }
    }
}

module.exports = Court;