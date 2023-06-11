import { createRouter, createWebHistory } from 'vue-router'
import BandList from './components/BandList.vue'
import AddBand from './components/AddBand.vue'
import LandingPage from './components/LandingPage.vue'

const routes = [
    {
        path: '/',
        name: 'landing',
        component: LandingPage
    },
    {
        path: '/bandlist',
        name: 'bandlist',
        component: BandList
    },
    {
        path: '/addband',
        name: 'addband',
        component: AddBand
    },
    // more routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
