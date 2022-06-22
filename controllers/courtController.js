const Court = require('../Models/court');

exports.CourtsGetAllActive = async (req, res) => {
    try {
        let allCourts = await new Court().GetAllActiveCourts();
        res.status(200).json(allCourts);
    } catch (error) {
        res.status(500).json({ error });
    }
}

exports.CourtsGetById = async (req, res) => {
    let { id } = req.params;
    console.log(id)
    try {
         let court = await new Court().GetCourtByID(id);
         if (court.courtId === undefined) 
            res.status(404).json({ message: 'court not found', court });
         else
             res.status(200).json(court);
     } catch (error) {
         res.status(500).json({message : 'undefine' });
        
     }
 }

 exports.AddCourt = async (req, res) => {
    /*
      * setp 0: make sure to require the model class
      * step 1: get the data from the req.body 
      * step 2: create a ne instance of the class
      * step 3: connect to DB
      * step 4: insert the record
      */
     let { courtId, availableHours } = req.body;
    let court = new Court(courtId, availableHours);

     try {
         let result = await court.InsertNewCourt();
         res.status(201).json(result);
     } catch (error) {
         res.status(500).json({ error })
     }
 };

 exports.UpdateCourt =  async (req, res) => {
         let {id} = req.params;
         let { courtId, availableHours} = req.body;
         try {
             let result = await new Court(courtId, availableHours).UpdateCourtById(id);
             res.status(200).json(result);
         } catch (error) {
             res.status(500).json({ error });
         }
     };

     exports.DeleteCourt = async (req, res) => {
             let {id} = req.params;
             try {
                 let result = await new Court().DeleteCourt(id);
                 res.status(200).json(result);
             } catch (error) {
                 es.status(500).json({ error });
             }
         };

/*
 CourtRouter.get('/court/:id', async (req, res) => {
    let { id } = req.params;

    try {
         let court = await new Court().GetCourtByID(id);
         if (court.court_id === undefined) 
            res.status(404).json({ message: 'court not found', court });
         else
             res.status(200).json(court);
     } catch (error) {
         res.status(500).json({message : 'undefine' });
        
     }
 });

//CRUD routes

// CourtRouter.get('/court', async (req, res) => {
//     try {
//         let allCourts = await new Court().GetAllActiveCourts();
//         res.status(200).json(allCourts);
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// });

// CourtRouter.get('/court/:id', async (req, res) => {
//     let { id } = req.params;

//     try {
//         let court = await new Court().GetCourtByID(id);
//         if (court.court_id === undefined) 
//             res.status(404).json({ message: 'court not found', court });
//         else
//             res.status(200).json(court);
//     } catch (error) {
//         res.status(500).json({message : 'undefine' });
        
//     }
// });

// CourtRouter.post('/court/add', async (req, res) => {
//     /*
//      * setp 0: make sure to require the model class
//      * step 1: get the data from the req.body 
//      * step 2: create a ne instance of the class
//      * step 3: connect to DB
//      * step 4: insert the record
//      */
//     let { courtId, availableHours } = req.body;
//     let court = new Court(courtId, availableHours);

//     try {
//         let result = await court.InsertNewCourt();
//         res.status(201).json(result);
//     } catch (error) {
//         res.status(500).json({ error })
//     }
// });

// CourtRouter.put('/court/:id', async (req, res) => {
//     let {id} = req.params;
//     let { courtId, availableHours} = req.body;
//     try {
//         let result = await new Court(courtId, availableHours).UpdateCourtById(id);
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// });

// CourtRouter.delete('/court/:id', async (req, res) => {
//     let {id} = req.params;
//     try {
//         let result = await new Court().DeleteCourt(id);
//         res.status(200).json(result);
//     } catch (error) {
//         es.status(500).json({ error });
//     }
// });


// // module.exports = CourtRouter;