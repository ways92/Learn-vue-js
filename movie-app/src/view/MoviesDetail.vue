<template>
  <div class="container mt-5">
    <Backdrop v-bind:movie="movie" v-bind:posterPath="posterPath" />

    <Poster v-bind:movie="movie" v-bind:posterPath="posterPath" />
  </div>
</template>

<script>
import Backdrop from '../components/Backdrop.vue'
import Poster from '../components/Poster.vue'
export default {
  components: {
    Backdrop,
    Poster,
  },
  mounted() {
    const ID = this.$route.params.id
    this.$store.dispatch('getMovie', ID)
  },
  computed: {
    posterPath() {
      return this.$store.state.posterPath
    },
    movie() {
      return this.$store.state.movie
    },
  },
}
</script>

<style>
.detail {
  margin-bottom: 100px;
}
</style>
