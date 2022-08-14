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

    async GetHoursByLocationAndDate(location, date) {
        try {
            let options = [
                { $project: { '_id': 0, 'gamesList.location': 1, 'gamesList.time': 1, 'gamesList.date': 1 } },
                { $unwind: '$gamesList' }
            ]
            let arr = await new DB().Aggregate('user', options);
            const ArrByDateLoc = arr.filter(game => game.gamesList.location === location && game.gamesList.date == date);
            const availableHours = ArrByDateLoc.map(game => game.gamesList.time)

            return availableHours;
        } catch (error) {
            return error;
        }


    }


    async NextAvailableGames(date, time) {
        try {
            let db = new DB();

            let options = [
                { $unwind: '$court' },
                {
                    $lookup: {
                        from: 'court',
                        localField: 'court',
                        foreignField: '_id',
                        pipeline: [
                            { $match: { 'isActive': true } },
                            { $project: { 'gameType': 0 } }
                        ],
                        as: 'courtInfo'
                    }
                },
                { $unwind: '$courtInfo' },
                { $unwind: '$courtInfo.availableHours' },
                { $project: { '_id': 0, 'court': 0 } },
                { $out: 'CourtsInLocaion' }
            ];
            await db.Aggregate('location', options);

            options = [
                { $unwind: '$gamesList' },
                { $project: { '_id': 0, 'gamesList.location': 1, 'gamesList.time': 1, 'gamesList.date': 1, 'gamesList.court': 1 } },
                { $match: { 'gamesList.date': date } },
                { $out: 'TakenGames' }
            ]
            await db.Aggregate('user', options);

            let games = await db.FindAll('CourtsInLocaion');
            let takenGames = await db.FindAll('TakenGames');

            await db.DropCollection('CourtsInLocaion');
            await db.DropCollection('TakenGames');

            let temp = new Array();

            for (let i = 0; i < takenGames.length; i++) {
                for (let j = 0; j < games.length; j++) {
                    if (!(games[j].courtInfo.availableHours.hour == takenGames[i].gamesList.time
                        && games[j].beachName == takenGames[i].gamesList.location
                        && games[j].courtInfo.courtId == takenGames[i].gamesList.court))
                        temp.push(games[j]);
                }
            }

            let currentTime = parseInt(time.split(':')[0])
            let availableGames = temp.filter(game=>{
                let hour = parseInt(game.courtInfo.availableHours.hour.split(':')[0]);
                return hour > currentTime
            })


            return availableGames;
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
            return await new DB().DeactivateDocById('location', id);
        } catch (error) {
            return error;
        }
    }
}

module.exports = Location;