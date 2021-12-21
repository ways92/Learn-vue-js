import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../view/Home.vue"
import About from "../view/About.vue"
import MoviesDetail from "../view/MoviesDetail.vue"


Vue.use( VueRouter )

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies/:id",
    name: "MoviesDetail",
    params: true,
    component: MoviesDetail,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
]

const router = new VueRouter( {
  mode: "history",
  base: process.env.BASE_URL,
  routes,
} )

export default router
