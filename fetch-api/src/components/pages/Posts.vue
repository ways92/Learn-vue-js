<template>
  <div class="hello container">
    <h1>JSONPLACEHOLDER</h1>
    <!-- <h5>{{ postBerdasarkanId(3).id }}</h5> -->
    <div v-for="(post, index) in posts" :key="index">
      <h5 class="my-2 bg-info rounded-pill">
        <router-link
          :to="`/posts/${post.id}`"
          class="text-decoration-none text-black"
        >
          {{ post.title }}
        </router-link>
      </h5>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      post: {}
    }
  },
  computed: mapState(['posts']),
  created () {
    this.$store.dispatch('loadPosts')
  },
  created2 () {
    this.$store.dispatch('getPost', this.id)
  }
  // posts () {
  //   return this.$store.state.posts
  // }
  // created () {
  //   this.$store.dispatch('loadPosts')
  // }
}
</script>
<style>
.hello {
  width: 1000px;
}
</style>
