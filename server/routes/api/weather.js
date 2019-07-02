const express = require('express');
const router = express.Router();
const { Weather } = require('../../models');
const { Op } = require('sequelize');

// Search Weather by name
router.get('/', (req, res) => {
    const name = req.query.q || '';
    Weather.findAll({
        where: {
            name: {
                [Op.substring]: name
            }
        }
    })
        .then(weather => res.json(weather))
        .catch(err => console.log(err));
});

// Search Weather by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Weather.findOne({
        where: {
            id: id
        }
    })
        .then(weather => res.json(weather))
        .catch(err => console.log(err));
});

// Add Weather
router.post('/', (req, res) => {
    const { name } = req.body;
    Weather.create({
        name: name
    })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
});

// Delete Weather
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Weather.destroy({
        where: {
            id: id
        }
    })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
});

// Update Weather
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    Weather.update({
        name: name
    }, {
        where: {
            id: id
        }
    })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
});

module.exports = router;