<template>
  <div class="detail container">
    <h1>Detail</h1>
    <div class="mx-5">
      <div class="card" style="width: 25rem;">
        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p class="card-text">
            Overview : Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Rating</li>
          <li class="list-group-item">Popularity</li>
          <li class="list-group-item">Release Date</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    this.fetchMovie(this.$route.params.id)
  },
  methods: {
    async fetchMovie(movieId) {
      const apiUrl = 'https://api.themoviedb.org/3'
      const apiKey = '9350682e7550ba5410fc9498023d14b3'
      const response = await axios.get(
        `${apiUrl}/movie/${movieId}?append_to_response=credits,videos,images${apiKey}`,
      )
      console.log(response.data)
    },
  },
}
</script>

<style>
.detail {
  margin-bottom: 800px;
}
</style>
