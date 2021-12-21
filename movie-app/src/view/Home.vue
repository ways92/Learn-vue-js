<template>
  <div class="home container mt-5">
    <div class="row">
      <div
        v-for="(item, index) in movies"
        :key="index"
        class="mt-2 col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6"
      >
        <CardView v-bind:item="item" v-bind:posterPath="posterPath" />
      </div>
    </div>
  </div>
</template>

<script>
import CardView from '../components/CardView.vue'

export default {
  components: { CardView },
  mounted() {
    this.$store.dispatch('getDataMovie')
  },
  computed: {
    movies() {
      return this.$store.state.dataMovie
    },
    posterPath() {
      return this.$store.state.posterPath
    },
  },
}
</script>

<style>
.home {
  margin-bottom: 50px;
}
</style>
