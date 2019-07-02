<template>
  <div>
    <h1>Add Weather</h1>
    <v-layout>
      <v-flex xs12>
        <v-text-field v-model="weather.name" label="Name" />
        <v-btn class="bg-primary white--text" v-on:click="addWeather">Add</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import weatherApi from '../../api/weather'

export default {

  data() {
    return {
      weather: {
        name: ''
      }
    }
  },

  methods: {
    async addWeather() {
      await weatherApi.add(this.weather);
      this.$router.push('/weather');
    }
  }
}
</script>
