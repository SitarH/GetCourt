const Location = require('../models/location');

//CRUD routes

exports.LocationGetAllActive = async (req, res) => {
         try {
             let allLocation = await new Location().GetAllActiveLocation();
             res.status(200).json(allLocation);
         } catch (error) {
             res.status(500).json({ error });
         }
     };

     exports.LocationGetById = async (req, res) => {
        let { id } = req.params;
   
        try {
            let location = await new Location().GetLocationByID(id);
            if (location === undefined) 
                res.status(404).json({ message: 'location not found', location });
            else
                res.status(200).json(location);
        } catch (error) {
            res.status(500).json({message : 'undefine game' });
           
        }
    };

    exports.GetGameByLocationAndDate = async (req, res) => {

        let {location, date, time} = req.body;
        
        try {
            let gamesArr = await new Location().GetHoursByLocationAndDate(location,date, time);
            if (gamesArr === undefined) 
            res.status(404).json({ message: 'location not found', gamesArr });
        else
            res.status(200).json(gamesArr);
        } catch (error) {
            res.status(500).json({message : 'undefine game' });
            
        }
    }

    exports.NextAvailableGames = async (req, res) => {

        let {date, time} = req.body;
        
        try {
            let gamesArr = await new Location().NextAvailableGames(date, time);
            if (gamesArr === undefined) 
            res.status(404).json({ message: 'games not found', gamesArr });
        else
            res.status(200).json(gamesArr);
        } catch (error) {
            res.status(500).json({message : 'undefine game' });
            
        }
    }
   
    exports.AddLocation = async (req, res) => {
             /*
              * setp 0: make sure to require the model class
              * step 1: get the data from the req.body 
              * step 2: create a ne instance of the class
              * step 3: connect to DB
              * step 4: insert the record
              */
             let { beachName, courtNum } = req.body;
             let location = new Location(beachName, courtNum);
         
             try {
                 let result = await location.InsertNewLocation();
                 res.status(201).json(result);
             } catch (error) {
                 res.status(500).json({ error })
             }
         };

        
         exports.UpdateLocation =  async (req, res) => {
                 let {id} = req.params;
                 let { beachName, courtNum} = req.body;
                 try {
                     let result = await new Location( beachName, courtNum).UpdateLocationById(id);
                     res.status(200).json(result);
                 } catch (error) {
                     res.status(500).json({ error });
                 }
             };

         
             exports.DeleteLocation = async (req, res) => {
                     let {id} = req.params;
                     try {
                         let result = await new Location().DeleteLocation(id);
                         res.status(200).json(result);
                     } catch (error) {
                         res.status(500).json({ error });
                     }
                 };

               