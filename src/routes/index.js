import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../pages/Home.vue'
export default createRouter({
    history: createWebHashHistory(),
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