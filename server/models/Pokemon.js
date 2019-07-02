const Sequelize = require('sequelize');
const db = require('../config/database');
const Type = require('./Type');
const Weather = require('./Weather');

const Pokemon = db.define('pokemon', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'id'
  },
  pokedexNumber: {
    type: Sequelize.INTEGER,
    field: 'pokedex_number'
  },
  name: {
    type: Sequelize.STRING,
    field: 'name'
  },
  imgName: {
    type: Sequelize.STRING,
    field: 'img_name'
  },
  generation: {
    type: Sequelize.TINYINT,
    field: 'generation'
  },
  evolutionStage: {
    type: Sequelize.TINYINT,
    field: 'evolution_stage'
  },
  isEvolved: {
    type: Sequelize.BOOLEAN,
    field: 'evolved'
  },
  familyId: {
    type: Sequelize.INTEGER,
    field: 'family_id'
  },
  isCrossGen: {
    type: Sequelize.TINYINT,
    field: 'cross_gen'
  },
  atk: {
    type: Sequelize.INTEGER,
    field: 'atk'
  },
  def: {
    type: Sequelize.INTEGER,
    field: 'def'
  },
  sta: {
    type: Sequelize.INTEGER,
    field: 'sta'
  },
  isLegendary: {
    type: Sequelize.BOOLEAN,
    field: 'legendary'
  },
  isAcquireable: {
    type: Sequelize.BOOLEAN,
    field: 'aquireable'
  },
  spawns: {
    type: Sequelize.BOOLEAN,
    field: 'spawns'
  },
  isRegional: {
    type: Sequelize.BOOLEAN,
    field: 'regional'
  },
  isRaidable: {
    type: Sequelize.BOOLEAN,
    field: 'raidable'
  },
  hatchable: {
    type: Sequelize.BOOLEAN,
    field: 'hatchable'
  },
  isShiny: {
    type: Sequelize.BOOLEAN,
    field: 'shiny'
  },
  nest: {
    type: Sequelize.BOOLEAN,
    field: 'nest'
  },
  isNew: {
    type: Sequelize.BOOLEAN,
    field: 'new'
  },
  notGettable: {
    type: Sequelize.BOOLEAN,
    field: 'not_gettable'
  },
  futureEvolve: {
    type: Sequelize.BOOLEAN,
    field: 'future_evolve'
  },
  cpAt40: {
    type: Sequelize.INTEGER,
    field: 'cp_at_40'
  },
  cpAt39: {
    type: Sequelize.INTEGER,
    field: 'cp_at_39'
  }
});

Pokemon.belongsToMany(Type, {
  through: 'pokemon_has_type',
  foreignKey: 'id_pokemon',
  otherKey: 'id_type'
})

Pokemon.belongsToMany(Weather, {
  through: 'pokemon_has_weather',
  foreignKey: 'id_pokemon',
  otherKey: 'id_weather'
})

module.exports = Pokemon;