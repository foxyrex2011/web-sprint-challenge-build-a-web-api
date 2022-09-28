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

router.post('/', validateProject, (req, res) => {
    Project.insert(req.body)
    .then(() => {
        return res.status(201).json(req.body)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'oof it just didnt work'})
    })
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.get('/:id/actions', (req, res) => {

});

module.exports = router;