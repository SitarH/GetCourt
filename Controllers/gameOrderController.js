const GameOrder = require('../Models/gameOrder');

//CRUD routes

exports.GameOrderGetAllActive = async (req, res) => {
       try {
         let allGameOrders = await new GameOrder().GetAllActiveGameOrders();
         res.status(200).json(allGameOrders);
     } catch (error) {
         res.status(500).json({ error });
     }
}

exports.GameOrderGetById = async (req, res) => {
         let { id } = req.params;
    
         try {
             console.log("get id")
             let gameOrder = await new GameOrder().GetGameOrdersByID(id);
             if (gameOrder === undefined) 
                 res.status(404).json({ message: 'game order not found', gameOrder });
             else
                 res.status(200).json(gameOrder);
         } catch (error) {
             console.log('error2')
             res.status(500).json({message : 'undefine game' });
            
         }
     }


 exports.AddGameOrder = async (req, res) => {
         /*
          * setp 0: make sure to require the model class
         * step 1: get the data from the req.body 
          * step 2: create a ne instance of the class
          * step 3: connect to DB
          * step 4: insert the record
          */
         let { date, time, type, players, court, location } = req.body;
         let gameOrder = new GameOrder(date, time, type, players, court, location);
    
         try {
             let result = await gameOrder.InsertNewGameOrder();
             res.status(201).json(result);
         } catch (error) {
             res.status(500).json({ error })
         }
     }

 exports.UpdateGameOrder =  async (req, res) => {
         let {id} = req.params;
         let {date, time, type, players, court, location} = req.body;
         try {
             let result = await new GameOrder(date, time, type, players, court, location).UpdateGameOrderById(id);
             res.status(200).json(result);
         } catch (error) {
             res.status(500).json({ error });
         }
     }

     exports.DeleteGameOrder = async (req, res) => {
             let {id} = req.params;
             try {
                 let result = await new GameOrder().DeleteGameOrder(id);
                 res.status(200).json(result);
             } catch (error) {
                 es.status(500).json({ error });
             }
         }




// GameOrderRouter.get('/gameOrder', async (req, res) => {
//     try {
//         let allGameOrders = await new GameOrder().GetAllActiveGameOrders();
//         res.status(200).json(allGameOrders);
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// });

// GameOrderRouter.get('/gameOrder/:id', async (req, res) => {
//     let { id } = req.params;

//     try {
//         console.log("get id")
//         let gameOrder = await new GameOrder().GetGameOrdersByID(id);
//         if (gameOrder === undefined) 
//             res.status(404).json({ message: 'game order not found', gameOrder });
//         else
//             res.status(200).json(gameOrder);
//     } catch (error) {
//         console.log('error2')
//         res.status(500).json({message : 'undefine game' });
        
//     }
// });

// GameOrderRouter.post('/gameOrder/add', async (req, res) => {
//     /*
//      * setp 0: make sure to require the model class
//      * step 1: get the data from the req.body 
//      * step 2: create a ne instance of the class
//      * step 3: connect to DB
//      * step 4: insert the record
//      */
//     let { date, time, type, players, court, location } = req.body;
//     let gameOrder = new GameOrder(date, time, type, players, court, location);

//     try {
//         let result = await gameOrder.InsertNewGameOrder();
//         res.status(201).json(result);
//     } catch (error) {
//         res.status(500).json({ error })
//     }
// });

// GameOrderRouter.put('/gameOrder/:id', async (req, res) => {
//     let {id} = req.params;
//     let {date, time, type, players, court, location} = req.body;
//     try {
//         let result = await new GameOrder(date, time, type, players, court, location).UpdateGameOrderById(id);
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// });

// GameOrderRouter.delete('/gameOrder/:id', async (req, res) => {
//     let {id} = req.params;
//     try {
//         let result = await new GameOrder().DeleteGameOrder(id);
//         res.status(200).json(result);
//     } catch (error) {
//         es.status(500).json({ error });
//     }
// });


// module.exports = GameOrderRouter;