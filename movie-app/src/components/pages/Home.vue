<template>
  <div class="home container mt-5">
    
      <div class="row" >
        <div v-for="(item, index) in movies" :key="index" class="mt-2 col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6 ">
          <div class="card shadow-lg hover-overlay hover-zoom hover-shadow" style="width: 18rem;">
            <router-link :to="`/movies/${item.id}`">
            <img :src="`${posterPath}${item.poster_path}`" alt="..." class="card-img-top">
            </router-link>
            <div class="card-body">
              <h6 class="card-text fw-bolder">{{ item.title }}</h6>
              <p>Rating {{item.vote_average *10}}%</p>
              <p> Release date : {{item.release_date}}</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  mounted() {
    this.$store.dispatch('getDataMovie')
  },
  computed:{
      movies() {
        return this.$store.state.dataMovie
      },
       posterPath(){
        return this.$store.state.posterPath
    },
    
    }
  }
</script>


<style>
.home {
  margin-bottom: 50px;
}
</style>
