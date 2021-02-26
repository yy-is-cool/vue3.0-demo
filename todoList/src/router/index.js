import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),// 指定模式
    routes
})

export default router