const express = require('express');
const {test} = require('./actions-middlware');
const Action = require('./actions-model');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('oof x2')
});

router.use((err, req, res, next) => {
    res.status(err.stack || 500).json({
        customMessage: 'oof',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;