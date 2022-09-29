const express = require ('express');
const {
    validateProjectId,
    validateProject,
} = require('./projects-middleware');
const Project = require('./projects-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.get()
        .then(project => {
            res.json(project)
        })
        .catch(next)
});

router.get('/:id', validateProjectId, (req, res) => {
    res.json(res.user)
});

router.post('/', validateProject, (req, res, next) => {
    Project.insert(req.body)
    .then((newProject) => {
        return res.status(201).json(newProject)
    })
    .catch(next)
});

router.put('/:id', validateProject, validateProjectId, (req, res, next) => {
    Project.update(req.params.id, req.body)
    .then((newProject) => {
        return res.status(400).json(newProject)
    })
    .catch(next)
});

router.delete('/:id', validateProjectId, (req, res, next) => {
    Project.remove(req.params.id)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
});

router.get('/:id/actions', validateProjectId, (req, res, next) => {
    Project.getProjectActions(req.params.id)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
});

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'ya... nothing worked'
    })
})

module.exports = router;