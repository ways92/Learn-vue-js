// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/pages/Home.vue'
// import About from '../components/pages/About.vue'
// import Post from '../components/pages/Post.vue'
// import Posts from '../components/pages/Posts.vue'
// import Pokemon from '../components/pages/Pokemon.vue'

// const routes = [
//   {
//     path: '/',
//     component: Home
//   },
//   {
//     path: '/pokemon',
//     component: Pokemon
//   },
//   {
//     path: '/posts',
//     component: Posts
//   },
//   {
//     path: '/posts/:id',
//     component: Post
//   },
//   {
//     path: '/about',
//     component: About
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'
import Post from '../components/pages/Post.vue'
import Posts from '../components/pages/Posts.vue'
import Pokemon from '../components/pages/Pokemon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/pokemon',
    component: Pokemon
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    component: Post,
    props: true
  },
  {
    path: '/helloworld',
    component: HelloWorld
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
