import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../components/pages/Home.vue"
import About from "../components/pages/About.vue"
import MoviesDetail from "../components/pages/MoviesDetail.vue"


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
    component: MoviesDetail,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
]

const router = new VueRouter( {
  routes,
  mode: "history",
  base: process.env.BASE_URL,
} )

export default router
