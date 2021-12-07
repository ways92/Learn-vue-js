import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

// const apiClient = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/'
// })
export default new Vuex.Store({
  state: {
    posts: [],
    post: []
    // users: []
  },
  actions: {
    // getPost (id) {
    //   return apiClient.get('posts/' + id)
    // },

    loadPosts ({ commit }) {
      Vue.axios
        .get('posts')
        .then((result) => {
          commit('SAVE_POSTS', result.data)
        })
        .catch((error) => {
          throw new Error(`API ${error}`)
        })
    }

    // loadPost ({ commit }, data) {
    //   Vue.axios
    //     .get(`posts/${data.id}`)
    //     .then((result) => {
    //       commit('SAVE_POSTS', result.data)
    //     })
    //     .catch((error) => {
    //       throw new Error(`API ${error}`)
    //     })
    // }

    // loadPost ({ commit }, id) {
    //   Vue.axios
    //     .get(`posts/${id}`)
    //     .then((result) => {
    //       commit('SAVE_POST', result.data)
    //     })
    //     .catch((error) => {
    //       throw new Error(`API ${error}`)
    //     })
    // }
  },
  // getters: {
  //   postBerdasarkanId: (state) => (id) => {
  //     return state.posts.find((obj) => {
  //       return obj.id === id
  //     })
  //   }
  // },
  mutations: {
    SAVE_POSTS (state, posts) {
      state.posts = posts
    },
    SAVE_POST (state, post) {
      state.post = post
    }
  }
})
