const express = require('express');
const { primiZahtev, demoZahtev, getStatusDemo, getStatus } = require('../controllers/request');
const router = express.Router();

router.post('/invoice', primiZahtev);
router.post('/demo', demoZahtev);
router.post('/demoStatus', getStatusDemo);
router.post('/getStatus', getStatus);

module.exports = router