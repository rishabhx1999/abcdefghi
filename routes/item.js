const express = require('express');
const { addItem } = require('../controller/item');
const router = express.Router();

router.post('/add', addItem);

module.exports = router;