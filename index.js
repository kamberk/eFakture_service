const express = require('express');
const cors = require('cors');
const xmlparser = require('express-xml-bodyparser');
const zahtevRouter = require('./routes/requests');

const index = express();
index.use(xmlparser());
index.use(cors());
index.use(express.json());

// index.get('/', (req, res) => {
//     res.sendFile('index.html', {root: __dirname});
// });

index.use('/eracun', zahtevRouter)

module.exports = index