<template>
  <div class="grid bg-slate-700 text-center">
    <h2>Dashboard</h2>
    <ul>
      <li>{{ list.name }}</li>
    </ul>
    {{ list.name }}
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
      alt=""
    />
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
    async fetchPokemon() {
      const url = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
      );
      const res = url.data.results;
      this.list = res;
    },
  },
};
</script>
