<template>
  <div>
    <h1>Update Type</h1>
    <v-layout>
      <v-flex xs12>
        <v-text-field v-model="type.name" label="Name" />
        <v-btn class="bg-primary white--text" v-on:click="updateType">Update</v-btn>
        <v-btn class="bg-primary white--text" v-on:click="deleteType">Delete</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import typeApi from '../../../api/type'

export default {

  async mounted() {
    this.id = this.$nuxt._route.params.id_
    this.type = await typeApi.searchById(this.id)
  },

  data() {
    return {
      id: null,
      type: {
        name: ''
      }
    }
  },

  methods: {
    async updateType() {
      await typeApi.update(this.id, this.type);
      this.$router.push('/type');
    },
    async deleteType() {
      await typeApi.delete(this.id);
      this.$router.push('/type');
    }
  }
}
</script>
