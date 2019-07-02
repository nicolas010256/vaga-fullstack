<template>
  <div>
    <h1>Update Weather</h1>
    <v-layout>
      <v-flex xs12>
        <v-text-field v-model="weather.name" label="Name" />
        <v-btn class="bg-primary white--text" v-on:click="updateWeather">Update</v-btn>
        <v-btn class="bg-primary white--text" v-on:click="deleteWeather">Delete</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import weatherApi from '../../../api/weather'

export default {

  async mounted() {
    this.id = this.$nuxt._route.params.id_
    this.weather = await weatherApi.searchById(this.id)
  },

  data() {
    return {
      id: null,
      weather: {
        name: ''
      }
    }
  },

  methods: {
    async updateWeather() {
      await weatherApi.update(this.id, this.weather);
      this.$router.push('/weather');
    },
    async deleteWeather() {
      await weatherApi.delete(this.id);
      this.$router.push('/weather');
    }
  }
}
</script>
