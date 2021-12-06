<template>
  <div class="container">
    <h1>Pokedex </h1>
    <div v-if="pokemons.loading">Loading...</div>
    <div
      v-else-if="pokemons.data && pokemons.data.length"
      v-for="(pokemon, index) in pokemons.data"
      :key="index"
      style="padding: 20px 0"
    >
      <span class="ms-5 " style=" cursor: pointer" @click="triggerDetail(pokemon.name)">
        {{ pokemon.name }}
      </span>
    </div>
    <div v-else>Data not found</div>

    <PokemonDetail
      v-if="showDetail"
      :pokemon="pokemonDetail"
      @close-modal="showDetail = false"
    />
  </div>
</template>

<script>
import PokemonDetail from "../PokemonDetail";
import PokemonServices from "../services/API/pokemon";

export default {
  components: { PokemonDetail },
  data: () => {
    return {
      pokemons: {
        data: [],
        loading: false,
      },
      pokemonDetail: null,
      showDetail: false,
    };
  },
  async created() {
    try {
      this.pokemons.loading = true;
      const result = await PokemonServices.getPokemons();
      this.pokemons = {
        data: result.results,
        loading: false,
      };
    } catch (error) {
      // do something
      this.pokemons.loading = false;
      console.log(error);
    }
  },
  methods: {
    async triggerDetail(id) {
      try {
        const result = await PokemonServices.getPokemon({ id });
        this.pokemonDetail = result;
        this.showDetail = true;
      } catch (error) {
        // do something
        console.log(error);
      }
    },
  },
};
</script>