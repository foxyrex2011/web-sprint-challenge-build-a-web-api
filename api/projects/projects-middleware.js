const Projects = require('./projects-model');

async function validateProjectId(req, res, next) {
    try {
        const project = await Projects.get(req.params.id)
        if (!project) {
            next({status: 404, message: 'oof'})
        } else {
            res.user = project
            next()
        }
    } catch {

    }
    next()
}

function validateProject(req, res, next) {
    const {name, description} = req.body
    if (!name || !description) {
        res.status(400).json({message: 'please provide name and description'})
    } else {
        req.name = name
        req.description = description
        next()
    }
}

module.exports = {
    validateProjectId,
    validateProject,
    
}