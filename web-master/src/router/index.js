import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Login'
import Management from '../components/Management'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/management',
        component: Management
    }

]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router