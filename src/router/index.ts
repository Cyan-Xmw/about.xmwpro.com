import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import XmwAbout from '@/components/XmwAbout.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: XmwAbout
    }
]
//创建
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router