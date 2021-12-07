<template>
  <div>
    <h1>post detail</h1>
    <div></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['posts'])
}
</script>

<style>
.post {
  margin-bottom: 800px;
}
</style>
