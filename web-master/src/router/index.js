import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Login'
import Management from '../components/Management'
import Peoplemanagement from "../components/Peoplemanagement";
import Products from "../components/products";
import Order from "../components/order";
import Data from "../components/data";
import Authority from "../components/authority";
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
    },
    {
        path: '/peoplemanagement',
        component: Peoplemanagement
    },
    {
        path: '/authority',
        component: Authority
    },
    {
        path: '/products',
        component: Products
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/data',
        component: Data
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router