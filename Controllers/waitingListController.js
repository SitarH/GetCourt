const WaitingList = require('../Models/waitingList');
const WaitingListRouter = require('express').Router();

//CRUD routes

WaitingListRouter.get('/waitingList', async (req, res) => {
    try {
        let waitingList = await new WaitingList().GetAllWaitingList();
        res.status(200).json(waitingList);
    } catch (error) {
        res.status(500).json({ error });
    }
});

WaitingListRouter.get('/waitingList/:id', async (req, res) => {
    let { id } = req.params;

    try {
        let waitingList = await new WaitingList().GetWaitingListByID(id);
        if (waitingList === undefined) 
            res.status(404).json({ message: 'game waiting list not found', waitingList });
        else
            res.status(200).json(waitingList);
    } catch (error) {
        console.log('error2')
        res.status(500).json({message : 'undefine waiting list' });
        
    }
});

//need to fix
WaitingListRouter.post('/waitingList/add', async (req, res) => {
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
});

//need to fix
WaitingListRouter.put('/waitingList/:id', async (req, res) => {
    let {id} = req.params;
    let {date, time, type, players, court, location} = req.body;
    try {
        let result = await new GameOrder(date, time, type, players, court, location).UpdateGameOrderById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
});

WaitingListRouter.delete('/waitingList/:id', async (req, res) => {
    let {id} = req.params;
    try {
        let result = await new WaitingList().DeleteWaitingList(id);
        res.status(200).json(result);
    } catch (error) {
        es.status(500).json({ error });
    }
});


module.exports = WaitingListRouter;