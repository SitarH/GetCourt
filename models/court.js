
const DB = require('../utils/db');

class Court {
    courtId;
    availableHours;
    isActive;

    constructor(courtId = 0, availableHours = []) {
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

    async GetCourtByID(id) {
        try {
            return await new DB().FindByID('court', id);
        } catch (error) {
            console.log(error);
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