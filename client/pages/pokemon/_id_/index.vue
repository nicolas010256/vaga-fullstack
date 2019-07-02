<template>
  <div>
    <h1>Update Pokémon</h1>
    <v-layout row wrap>
      <v-flex>
        <v-text-field v-model="id" label="ID" disabled />
      </v-flex>
      <v-flex>
        <v-text-field class="ml-2" v-model="pokemon.pokedexNumber" label="Pokedex Number" />
      </v-flex>
      <v-flex xs12>
        <v-text-field v-model="pokemon.name" label="Name" />
        <v-text-field v-model="pokemon.imgName" label="Image Name" />
      </v-flex>
      <v-flex xs3>
        <v-text-field v-model="pokemon.generarion" label="Generation" />
      </v-flex>
      <v-flex xs3>
        <v-text-field class="ml-2" v-model="pokemon.evolutionStage" label="Evolution Stage"/>
      </v-flex>
      <v-flex xs3>
        <v-text-field class="ml-2" v-model="pokemon.familyId" label="Family ID"/>
      </v-flex>
      <v-flex xs3>
        <v-text-field class="ml-2" v-model="pokemon.hatchable" label="Hatchable" />
      </v-flex>
      <v-flex xs4>
        <v-text-field v-model="pokemon.atk" label="ATK" />
      </v-flex>
      <v-flex xs4>
        <v-text-field class="ml-2" v-model="pokemon.def" label="DEF" />
      </v-flex>
      <v-flex xs4>
        <v-text-field class="ml-2" v-model="pokemon.sta" label="STA" />
      </v-flex>
      <v-flex xs6>
        <v-autocomplete
          v-model="pokemon.types[0]"
          :items="types"
          item-text="name"
          item-value="id"
          name="item"
          label="Type" />
      </v-flex>
      <v-flex xs6>
        <v-autocomplete
          v-model="pokemon.types[1]"
          :items="types"
          item-text="name"
          item-value="id"
          name="item"
          class="ml-2"
          label="Type" />
      </v-flex>
      <v-flex xs6>
        <v-autocomplete
          v-model="pokemon.weather[0]"
          :items="weather"
          item-text="name"
          item-value="id"
          name="item"
          label="Weather" />
      </v-flex>
      <v-flex xs6>
        <v-autocomplete
          v-model="pokemon.weather[1]"
          :items="weather"
          item-text="name"
          item-value="id"
          name="item"
          class="ml-2"
          label="Weather" />
      </v-flex>
      <v-flex xs6>
        <v-text-field v-model="pokemon.cpAt39" label="100% CP @ 39" />
      </v-flex>
      <v-flex xs6>
        <v-text-field class="ml-2" v-model="pokemon.cpAt40" label="100% CP @ 40" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.isLegendary" label="Legendary" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.isAcquireable" label="Acquireable" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.spawns" label="Spawns" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.isRegional" label="Regional" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.isRaidable" label="Raidable" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.isShiny" label="Shiny" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.nest" label="Nest" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.isNew" label="New" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.notGettable" label="Not Gettable" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.futureEvolve" label="Future Evolve" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.isEvolved" label="Evolved" />
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="pokemon.isCrossGen" label="Cross Gen" />
      </v-flex>
      <v-btn class="bg-primary white--text" v-on:click="updatePokemon">Update</v-btn>
      <v-btn class="bg-primary white--text" v-on:click="deletePokemon">Delete</v-btn>
    </v-layout>
  </div>
</template>

<script>
import pokemonApi from '../../../api/pokemon'
import typeApi from '../../../api/type'
import weatherApi from '../../../api/weather'

export default {

  async mounted() {
    this.id = this.$nuxt._route.params.id_
    this.pokemon = await pokemonApi.searchById(this.id)
    this.types = await typeApi.search('')
    this.weather = await weatherApi.search('')
  },

  data() {
    return {
      id: null,
      pokemon: {
        pokedexNumber: null,
        name: null,
        imgName: null,
        generation: null,
        evolutionStage: null,
        familyId: null,
        atk: 0,
        def: 0,
        sta: 0,
        hatchable: null,
        cpAt39: null,
        cpAt40: null,
        isLegendary: false,
        isAcquireable: false,
        spawns: false,
        isRegional: false,
        isRaidable: false,
        isShiny: false,
        nest: false,
        isNew: false,
        notGettable: false,
        futureEvolve: false,
        isEvolved: false,
        isCrossGen: false,
        types:[],
        weather: []
      },

      types: [],
      weather: []
    }
  },

  methods: {
    async updatePokemon() {
      await pokemonApi.update(this.id, this.pokemon)
      this.$router.push('/pokemon')
    },

    async deletePokemon() {
      await pokemonApi.delete(this.id)
      this.$router.push('/pokemon')
    }
  },
}
</script>
