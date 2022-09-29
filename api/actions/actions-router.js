const express = require('express');
const {
    validateId,
    validateBody
} = require('./actions-middlware');
const Action = require('./actions-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Action.get()
    .then(post => {
        res.json(post)
    })
    .catch(next)
});

router.get('/:id', validateId, (req, res) => {
    res.json(req.user)
});

router.post('/', validateBody, (req, res, next) => {
    Action.insert(req.body)
    .then((newAction) => {
        return res.status(201).json(newAction)
    })
    .catch(next)
});

router.put('/:id', validateId, validateBody, (req, res, next) => {
    Action.update(req.params.id, req.body)
    .then((newAction) => {
        res.status(400).json(newAction)
    })
    .catch(next)
});

router.delete('/:id', validateId, (req, res, next) => {
    Action.remove(req.params.id)
    .then((deletedPost) => {
        res.json(deletedPost)
    })
    .catch(next)
});

router.use((err, req, res, next) => {
    res.status(err.stack || 500).json({
    })
});

module.exports = router;