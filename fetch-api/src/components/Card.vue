<template>
  <div>
    <div class="row g-4">
      <div
        class="col-sm-6 col-lg-4"
        v-for="(user, index) in users"
        :key="index"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ user.username }}</h5>
            <router-link :to="`/posts/${user.id}`" class="btn btn-primary"
              >Go to link</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'card-posts',
  computed: mapState(['users']),
  created () {
    this.$store.dispatch('loadUsers')
  }
}

// import { reactive, toRefs } from 'vue'
// export default {
//     name: 'Card',
//     async setup() {
//         const data = reactive({
//             list:[]
//         });

//         const result = await fetch('https://jsonplaceholder.typicode.com/posts');
//         data.list = await result.json();

//         return { ...toRefs(data) }
//     }
// }
</script>

<style>
p.hoverr:hover {
  color: darkgoldenrod;
  font-weight: 800;
}
</style>
