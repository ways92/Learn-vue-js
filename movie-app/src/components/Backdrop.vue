<template>
  <div class="mb-5 mx-auto d-flex justify-content-center">
    <img
      class="img-fluid"
      style="width: 800px;"
      :src="`${posterPath}${movie.backdrop_path}`"
      alt="image"
    />
  </div>
</template>

<script>
export default {
  name: 'Backdrop',
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
