const express = require('express');

const router = express.Router();

const developers = require('./developers');

router.use('/developers', developers);

module.exports = router;
