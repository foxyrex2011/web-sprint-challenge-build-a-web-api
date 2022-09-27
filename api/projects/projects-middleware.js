const Projects = require('./projects-model');

function validateProject(req, res, next) {
    const {name} = req.body
    if (!name) {

    } else {
        next()
    }
}

module.exports = {
    validateProject,
    
}