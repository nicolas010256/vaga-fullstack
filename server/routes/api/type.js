const express = require('express');
const router = express.Router();
const { Type } = require('../../models');
const { Op } = require('sequelize');

// Search Type by name
router.get('/', (req, res) => {
    const name = req.query.q || '';
    Type.findAll({
        where: {
            name: {
                [Op.substring]: name
            }
        }
    })
        .then(types => res.json(types))
        .catch(err => console.log(err));
});

// Search Type by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Type.findOne({
        where: {
            id: id
        }
    })
        .then(type => res.json(type))
        .catch(err => console.log(err));
});

// Add Type
router.post('/', (req, res) => {
    const { name } = req.body;
    Type.create({
        name: name
    })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
});

// Update Type
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    Type.update({
        name: name
    }, {
        where: {
            id: id
        }
    })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
})

// Delete Type
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Type.destroy({
        where: {
            id: id
        }
    })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
});

module.exports = router;