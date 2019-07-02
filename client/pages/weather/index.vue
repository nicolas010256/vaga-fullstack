<template>
  <div>
    <h1>Weather</h1>
    <v-layout row wrap class="mt-3">
      <v-flex xs6>
        <v-text-field v-model="name"/>
      </v-flex>
      <v-flex>
        <v-btn class="bg-primary white--text" style="display:inline-block" v-on:click="search">Search</v-btn>
      </v-flex>
      <v-flex xs12>
        <nuxt-link to="weather/add">Add new</nuxt-link>
      </v-flex>
      <v-layout row wrap class="mt-5">
        <v-flex xs5 v-for="weather in weathers" :key="weather.id">
          <div class="bg-primary pa-2 mr-2 mb-2" @click="navigate(`/weather/${weather.id}`)">
            <span class="white--text">{{weather.name}}</span>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import weatherApi from '../../api/weather'

export default {

  async mounted() {
    this.weathers = await weatherApi.search('');
  },

  data() {
    return {
      weathers: [],
      name: ''
    }
  },

  methods: {
    async search() {
      this.weathers = await weatherApi.search(this.name);
    },

    navigate(route) {
      this.$router.push(route)
    }
  }
}
</script>
