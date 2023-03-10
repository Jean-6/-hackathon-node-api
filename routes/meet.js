const express = require('express');
const router = express.Router();

const meetCtrl = require('../controllers/meet');

router.post('/create',meetCtrl.createMeet);
router.get('/all',meetCtrl.getAllMeet);
router.get('/getOne/:id',meetCtrl.getMeetById);


module.exports = router;
