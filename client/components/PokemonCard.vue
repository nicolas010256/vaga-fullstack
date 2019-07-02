<template>
    <v-layout class="card" row>
      <div class="card-id bg-primary">
        <span class="white--text center--text">{{ pokemon.pokedexNumber }}</span>
      </div>
      <v-flex xs2>
          <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.imgName}.png`" class="img--size-1">
      </v-flex>
      <v-flex xs10>
        <v-layout row wrap>
          <v-flex xs4>
            <div class="mt-3">
              <span> {{ pokemon.name }} </span>
            </div>
          </v-flex>
          <v-flex xs8>
            <div class="mt-3">
              <div style="display: inline-block" class="mr-2">
                <span class="text--size-1">ATK</span>
                <div>{{pokemon.atk}}</div>
              </div>
              <div style="display: inline-block" class="mr-2">
                <span class="text--size-1">DEF</span>
                <div>{{pokemon.def}}</div>
              </div>
              <div style="display: inline-block" class="mr-2">
                <span class="text--size-1">STA</span>
                <div>{{pokemon.sta}}</div>
              </div>
              <div style="display: inline-block" class="ml-2">
                <span class="text--size-1">TOTAL</span>
                <div>{{pokemon.atk + pokemon.def + pokemon.sta}}</div>
              </div>
            </div>
          </v-flex>
            <v-flex xs8>
            <v-chip v-for="type in pokemon.types" :key="type.id" :class="[`bg-${type.name}`, 'white--text']">
                  {{ type.name }}
            </v-chip>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  props: {
    pokemon: {
      required: true,
      default: null
    }
  }
}
</script>
