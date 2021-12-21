<template>
  <div class="container mt-5">
    <Backdrop />

    <Poster />
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
}
</script>

<style>
.detail {
  margin-bottom: 100px;
}
</style>
