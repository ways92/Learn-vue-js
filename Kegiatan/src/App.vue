<template>
  <div id="app" class="container mt-5">
    <h1>{{ judul }} </h1>
    <form class="row g-3" @submit.prevent="addTodo">
    <div class="col-auto">
      <input v-model="newTodo" type="text" class="form-control"  placeholder="Input kegiatan">
    </div>
    <div class="row-auto">
      <button type="submit" class="btn btn-warning mb-3 me-2">Masukkan</button>
      <button @click="allSelesai" type="button" class="btn btn-secondary mb-3">Selesai Semua</button>
    </div>
  </form>
  <h3>Jumlah kegiatan yang tersisa " {{selesaiTodos}} "</h3>
    <ul v-for=" (todo, index) in todos"  :key="index">
      <li >
        <span :class="{selesai:todo.selesai}" :key="todo.kegiatan">{{ todo.kegiatan }}</span>
        <input type="checkbox" @click="toggleTodoSelesai(index)" :checked="todo.selesai" class="ms-1">
      </li>

    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    newTodo: {
      get () { return this.$store.newTodo },
      set (value) { this.$store.commit('setNewTodo', value) }
    },
    selesaiTodos () {
      return this.$store.getters.selesaiTodos
    },
    ...mapState(['judul', 'todos'])

  },
  methods: {
    ...mapMutations(['allSelesai']),
    ...mapActions(['addTodo', 'toggleTodoSelesai'])
  },
  components: {

  }
}
</script>

<style>
.selesai {
  text-decoration: line-through;
}
</style>
