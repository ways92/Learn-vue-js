<template>
  <div class="home container">
    <h1>HOME</h1>
    <h4 v-for="(movie, index) in movie1" :key="index">{{movie.title}}</h4>
      <div class="row" >
        <div v-for="(item, index) in movies" :key="index" class="mt-2 col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6 ">
          <div class="card shadow-lg hover-overlay hover-zoom hover-shadow" style="width: 18rem;">
            <router-link :to="`/movies/${item.id}`">
            <img :src="`${posterPath}${item.poster_path}`" alt="..." class="card-img-top">
            </router-link>
            <div class="card-body">
              <h5 class="card-text">{{ item.title }}</h5>
              <p class="card-text">Rating {{item.vote_average *10}}%</p>
              <p> Release date : {{item.release_date}}</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {

  components:{},
  async mounted(){
    this.$store.dispatch('getDataMovie')
    
  },
  computed:{
    movies() {
      return this.$store.state.dataMovie
    },
    posterPath(){
      return "https://image.tmdb.org/t/p/w500"
    }
    
    }
  }
</script>


<style>
.home {
  margin-bottom: 850px;
}
</style>
