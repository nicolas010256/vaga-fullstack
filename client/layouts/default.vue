<template>
  <v-app>
    <v-toolbar class="bg-primary" app>
      <v-toolbar-title> <nuxt-link to="/" class="white--text decoration--none">Pokémon Go</nuxt-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat class="white--text" v-on:click.native="navigate('/pokemon')">Pokémon</v-btn>
        <v-btn flat class="white--text" v-on:click.native="navigate('/type')">Type</v-btn>
        <v-btn flat class="white--text" v-on:click.native="navigate('/weather')">Weather</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <div style="width: 70%; margin:auto">
          <nuxt />
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {
    navigate(route) {
      this.$router.push(route);
    }
  }
}
</script>
