import { createRouter, createWebHistory } from 'vue-router'
import BandList from './components/BandList.vue'
import AddBand from './components/AddBand.vue'
import LandingPage from './components/LandingPage.vue'
import RegisterView from './components/RegisterView.vue'
import LoginView from './components/LoginView.vue'
import LogoutView from './components/LogoutView.vue'

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
    {
        path: '/register',
        name: 'RegisterView',
        component: RegisterView
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/logout',
        name: 'LogoutView',
        component: LogoutView
    },
    // more routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
