<template>
  <div>
    <h1>Types</h1>
    <v-layout row wrap class="mt-3">
      <v-flex xs6>
        <v-text-field v-model="name"/>
      </v-flex>
      <v-flex xs6>
        <v-btn class="bg-primary white--text" style="display:inline-block" v-on:click="search">Search</v-btn>
      </v-flex>
      <v-flex xs12>
        <nuxt-link to="type/add">Add new</nuxt-link>
      </v-flex>
      <v-layout row wrap class="mt-5">
        <v-flex xs5 v-for="type in types" :key="type.id">
          <div :class="[`bg-${type.name}`, 'pa-2', 'mr-2', 'mb-2  ']" @click="navigate(`/type/${type.id}`)">
            <span class="white--text">{{type.name}}</span>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import typeApi from '../../api/type'

export default {
  async mounted() {
    this.types = await typeApi.search(name);
  },

  data() {
    return {
      types: [],
      name: ''
    }
  },

  methods: {
    async search() {
      this.types = await typeApi.search(this.name);
    },

    navigate(route) {
      this.$router.push(route);
    }
  }
}
</script>
