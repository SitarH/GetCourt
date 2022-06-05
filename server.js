//Libraries
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

//Server initialize
const PORT = process.env.PORT || 5008;
const server = express();
server.use(cors()); //allow us to access the server from each endpoint
server.use(express.json()); //add json support for POST, GET, PUT, DELETE 
server.use(express.static(path.join(__dirname, 'client/build/')));

//routes
server.use('/api/GetCourt', require('./Controllers/courtController'));
server.use('/api/GetCourt', require('./Controllers/productController'));
server.use('/api/GetCourt', require('./Controllers/gameOrderController'));
server.use('/api/GetCourt', require('./Controllers/waitingListController'));
server.use('/api/GetCourt', require('./Controllers/locationController'));
server.use('/api/GetCourt', require('./Controllers/userController'));

//Global Get Request
server.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/', 'index.html'));
});

//Run the server
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));

