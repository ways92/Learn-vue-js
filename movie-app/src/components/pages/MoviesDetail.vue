<template>
  <div class="container  mt-5">
    <div class="mb-5 mx-auto d-flex justify-content-center " >
      <img class="img-fluid" style="width: 800px;" :src="`${posterPath}${movie.backdrop_path}`" alt="image">
    </div>

    <div class="detail row d-flex justify-content-evenly">

      <div class=" col-12 col-md d-flex justify-content-center justify-content-sm-center justify-content-lg-center">
        <div class="" style="width: 23rem;">
          <img :src="`${posterPath}${movie.poster_path}`" class="card-img-top" alt="image" />
        </div>
      </div>
      
      <div class=" col-12 col-md mt-2 ">
        <div class=" ps-lg-5 card shadow-lg" style="width: 100%;">
          
          <div class="card-body">
            <h4 class="card-title fw-bolder">{{ movie.title }}</h4>
            <p class="card-text">
              Overview : {{ movie.overview }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating : {{ movie.vote_average * 10 }} %</li>
            <li class="list-group-item">{{ movie.vote_count }} Voting</li>
            <li class="list-group-item">Release Date : {{ movie.release_date }}</li>
            <li class="list-group-item">Duration : {{ movie.runtime }} Minutes</li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  mounted(){
    const ID = this.$route.params.id
    this.$store.dispatch('getMovie', ID)
  },
  computed:{

    posterPath(){
      return this.$store.state.posterPath
    },   
    movie() {
      return this.$store.state.movie
    }
  },

}
</script>

<style>
.detail {
  margin-bottom: 100px;
}
</style>
