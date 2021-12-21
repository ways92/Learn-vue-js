<template>
  <div
    class="card shadow-lg hover-overlay hover-zoom hover-shadow"
    style="width: 18rem;"
  >
    <router-link :to="`/movies/${item.id}`">
      <img
        :src="`${posterPath}${item.poster_path}`"
        alt="..."
        class="card-img-top"
      />
    </router-link>

    <div class="card-body">
      <h6 class="card-text fw-bolder">{{ item.title }}</h6>
      <p>Rating {{ item.vote_average * 10 }}%</p>
      <p>Release date : {{ item.release_date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardView',
  props: ['item', 'posterPath'],
}
</script>

<style></style>
