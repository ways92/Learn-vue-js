import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/pages/Home'
import About from '../components/pages/About.vue'
import Post from '../components/pages/Post.vue'
import Posts from '../components/pages/Posts.vue'
import Pokemon from '../components/pages/Pokemon.vue'

const routes = [
    {
        path: '/',
        component: Home
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
        component: Post
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router