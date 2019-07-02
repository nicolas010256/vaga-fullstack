<template>
  <div>
    <h1>Pokémon</h1>
    <v-layout row wrap class="mt-3">
      <v-flex xs6>
        <v-text-field v-model="name"/>
      </v-flex>
      <v-flex>
        <v-btn class="bg-primary white--text" style="display:inline-block" v-on:click="search">Search</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex >
        <nuxt-link to="/pokemon/add">Add new</nuxt-link>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 shrink v-for="p in pokemon" :key="p.id" >
        <pokemon-card @click.native="navigate(`/pokemon/${p.id}`)" :pokemon='p' class="mt-2 mr-4" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import PokemonCard from '../../components/PokemonCard'
import pokemonApi from '../../api/pokemon'

export default {
  components: {
    PokemonCard
  },

  async mounted() {
    this.pokemon = await pokemonApi.search('');
  },

  data() {
    return {
      pokemon: [],
      name: ''
    }
  },

  methods: {
    async search() {
      this.pokemon = await pokemonApi.search(this.name);
    },

    navigate(route) {
      this.$router.push(route)
    }
  }
}
</script>
