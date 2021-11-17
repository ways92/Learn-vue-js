import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    judul: 'Kegiatan sehari-hari',
    todos: [{
      kegiatan: 'Makan pagi',
      selesai: false
    },
    {
      kegiatan: 'Memberi makan kucing',
      selesai: false
    },
    {
      kegiatan: 'Lari pagi',
      selesai: false
    },
    {
      kegiatan: 'Merapikan kamar',
      selesai: false
    }]
  },
  mutations: {
    setNewTodo (state, value) {
      state.newTodo = value
    },
    addTodo (state) {
      state.todos.push({
        kegiatan: state.newTodo,
        selesai: false
      })
    },
    allSelesai (state) {
      state.todos.forEach((todo) => {
        todo.selesai = true
      })
    },
    setTodoSelesai (state, index) {
      state.todos[index].selesai = true
    },
    setTodoTidakSelesai (state, index) {
      state.todos[index].selesai = false
    }

  },
  actions: {
    addTodo (context) {
      context.commit('addTodo')
      context.commit('setNewTodo', '')
    },
    toggleTodoSelesai (context, index) {
      const todo = context.state.todos[index]
      if (todo.selesai) {
        context.commit('setTodoTidakSelesai', index)
      } else {
        context.commit('setTodoSelesai', index)
      }
    }
  },
  getters: {
    selesaiTodos: state => {
      var selesai = state.todos.filter((todo) => todo.selesai === false)
      return selesai.length
    }
  }
})
