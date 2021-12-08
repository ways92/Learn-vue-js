import { createRouter, createWebHistory } from "vue-router"

import Home from "../components/pages/Home"
import About from "../components/pages/About.vue"
import Detail from "../components/pages/Detail.vue"
import Pokemon from "../components/pages/Pokemon.vue"


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/pokemon",
    component: Pokemon,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/detail/:name",
    name: 'name',
    component: Detail,
  },
  {
    path: "/pokemon",
    component: Pokemon,
  },

]

const router = createRouter( {
  history: createWebHistory(),
  routes,
} )

export default router
