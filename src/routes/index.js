import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/Home.vue'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/selectfood',
            component: () => import('../pages/SelectFood.vue')
        },
        {
            path: '/result/:food',
            component: () => import('../pages/Result.vue')
        }
    ]
})