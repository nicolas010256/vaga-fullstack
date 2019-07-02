const express = require('express');
const router = express.Router();
const { Pokemon, Type, Weather } = require('../../models');
const { Op } = require('sequelize');


// Search Pokémon
router.get('/', (req, res) => {
    const name = req.query.q || '';
    Pokemon.findAll(
        {
            include: [{
                model: Type
            }, {
                model: Weather
            }],
            where: {
                name: {
                    [Op.substring]: name
                }
            }
        })
        .then(pokemon => res.json(pokemon))
        .catch(err => console.log(err));
});

// Search Pkémon by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Pokemon.findOne({
        include: [{
            model: Type
        }, {
            model: Weather
        }],
        where: {
            id: id
        }
    })
        .then(pokemon => res.json(pokemon))
        .catch(err => console.log(err));
});


// Add Pokémon
router.post('/', (req, res) => {
    const {
        id,
        pokedexNumber,
        name,
        imgName,
        generation,
        evolutionStage,
        familyId,
        atk,
        def,
        sta,
        hatchable,
        cpAt39,
        cpAt40,
        isLegendary,
        isAcquireable,
        spawns,
        isRegional,
        isRaidable,
        isShiny,
        nest,
        isNew,
        notGettable,
        futureEvolve,
        isCrossGen,
        isEvolved,
        types,
        weather

    } = req.body;

     Pokemon.create({
        id: id,
        pokedexNumber: pokedexNumber,
        name: name,
        imgName: imgName,
        generation: generation,
        evolutionStage: evolutionStage,
        familyId: familyId,
        atk: atk,
        def: def,
        sta: sta,
        hatchable: hatchable,
        cpAt39: cpAt39,
        cpAt40: cpAt40,
        isLegendary: isLegendary,
        isAcquireable: isAcquireable,
        spawns: spawns,
        isRegional: isRegional,
        isRaidable: isRaidable,
        isShiny: isShiny,
        nest: nest,
        isNew: isNew,
        notGettable: notGettable,
        futureEvolve: futureEvolve,
        isCrossGen: isCrossGen,
        isEvolved: isEvolved
    })
        .then(pokemon => {
            if (types[0] != null)
                pokemon.addTypes(types[0]);
            if (types[1] != null)
                pokemon.addTypes(types[1]);
            
            if (weather[0] != null)
                pokemon.addWeather(weather[0]);
            if (weather[1] != null)
                pokemon.addWeather(weather[1]);

            res.sendStatus(200)
            
        })
        .catch(err => console.log(err));
});

// Update Pokémon
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {
        pokedexNumber,
        name,
        imgName,
        generation,
        evolutionStage,
        familyId,
        atk,
        def,
        sta,
        hatchable,
        cpAt39,
        cpAt40,
        isLegendary,
        isAcquireable,
        spawns,
        isRegional,
        isRaidable,
        isShiny,
        nest,
        isNew,
        notGettable,
        futureEvolve,
        isEvolved,
        isCrossGen,
        types

    } = req.body;

    Pokemon.update({
        pokedexNumber: pokedexNumber,
        name: name,
        imgName: imgName,
        generation: generation,
        evolutionStage: evolutionStage,
        familyId: familyId,
        atk: atk,
        def: def,
        sta: sta,
        hatchable: hatchable,
        cpAt39: cpAt39,
        cpAt40: cpAt40,
        isLegendary: isLegendary,
        isAcquireable: isAcquireable,
        spawns: spawns,
        isRegional: isRegional,
        isRaidable: isRaidable,
        isShiny: isShiny,
        nest: nest,
        isNew: isNew,
        notGettable: notGettable,
        futureEvolve: futureEvolve,
        isCrossGen: isCrossGen,
        isEvolved: isEvolved
    }, {
        where: {
            id: id
        }
    })
        .then()
        .catch(err => console.log(err));

        Pokemon.findOne({
            where: {
                id: id
            }
        })
            .then(pokemon => {
                console.log(types)
                pokemon.setTypes(types);
                res.sendStatus(200);
            })
            .catch(err => console.log(err));
});


// Delete Pokémon by id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Pokemon.destroy({
        where: {
            id: id
        }
    })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
});

module.exports = router;