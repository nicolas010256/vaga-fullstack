<template>
  <div>
    <h1>Add Type</h1>
    <v-layout>
      <v-flex xs12>
        <v-text-field v-model="type.name" label="Name" />
        <v-btn class="bg-primary white--text" v-on:click="addType">Add</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import typeApi from '../../api/type'

export default {

  data() {
    return {
      type: {
        name: ''
      }
    }
  },

  methods: {
    async addType() {
      await typeApi.add(this.type);
      this.$router.push('/type');
    }
  }
}
</script>
