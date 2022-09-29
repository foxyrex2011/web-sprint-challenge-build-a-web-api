const Actions = require('./actions-model');

async function validateId(req, res, next) {
    try {
        const id = await Actions.get(req.params.id)
        if (!id) {
            res.status(404).json({message: 'there is no such id'})
        } else {
            req.user = id
            next()
        }
    } catch {
        next()
    }
}

function validateBody(req, res, next) {
    const {project_id, description, notes} = req.body
    if (!project_id || !description || !notes) {
        res.status(400).json({message: 'please have project_id, description, and notes filled out.'})
    } else {
        next()
    }
}

module.exports = {
    validateId,
    validateBody
}