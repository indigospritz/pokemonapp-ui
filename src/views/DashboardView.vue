<template>
  <div class="m-auto bg-slate-700">
    <ul class="m-auto flex max-w-5xl flex-wrap items-center gap-4">
      <li
        v-for="(pokemon, id) in list"
        :key="id"
        class="relative flex h-auto flex-col items-center rounded-md bg-slate-300 p-2"
      >
        <!-- <p >x</p> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="absolute top-2 right-2"
        >
          <path
            fill="currentColor"
            d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
          />
        </svg>
        <img :src="pokemon.form" alt="pokemon-image" class="h-40" />
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },

  mounted() {
    this.fetchPokemon();
  },

  methods: {
    capitalizeFirstLetter(str) {
      return str.replace(/^\w/, (c) => c.toUpperCase());
    },

    async fetchPokemon() {
      const url = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
      );
      const res = url.data.results;
      this.list = [];
      for (let i = 0; i < res.length; i++) {
        let pokemonData = await axios.get(res[i].url);
        this.list.push({
          name: this.capitalizeFirstLetter(pokemonData.data.name),
          form: pokemonData.data.sprites.front_default,
        });
      }
    },
  },
};
</script>
