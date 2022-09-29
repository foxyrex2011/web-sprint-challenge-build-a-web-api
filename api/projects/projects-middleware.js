const Projects = require('./projects-model');

async function validateProjectId(req, res, next) {
    try {
        const project = await Projects.get(req.params.id)
        if (!project) {
            res.status(404).json({message: 'not a real project'})
        } else {
            res.user = project
            next()
        }
    } catch {
        next()
    }
}

function validateProject(req, res, next) {
    const {name, description} = req.body
    if (!name || !description) {
        res.status(400).json({message: 'please provide name and description'})
    } else {
        next()
    }
}

function validateAction(req, res, next) {
    const {text} = req.body
    if (!text) {
        res.status(404).json({
            message: 'no such action nerdddd'
        })
    } else {
        next()
    }
}

module.exports = {
    validateProjectId,
    validateProject,
    validateAction,
}