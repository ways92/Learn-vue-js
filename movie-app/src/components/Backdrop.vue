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
  props: ['movie', 'posterPath'],
}
</script>

<style>
.detail {
  margin-bottom: 100px;
}
</style>
