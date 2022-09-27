const Actions = require('./actions-model');

function test(req, res, next) {
    console.log('oof x3');
    next()
}

module.exports = {
    test,
    
}