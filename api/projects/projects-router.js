const express = require ('express');
const {validateProject} = require('./projects-middleware');
const Project = require('./projects-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.get()
        .then(project => {
            res.json(project)
        })
        .catch(next)
});

router.get('/:id', (req, res) => {

})

router.post((req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

router.get('/:id/actions', (req, res) => {

})

router.use((err, req, res, next) => {
    res.status(err.stack || 500).json({
        customMessage: 'oof',
        message: err.message,
        stack: err.stack
    })
});

module.exports = router;