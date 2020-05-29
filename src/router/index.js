import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/client/Home.vue'
import About from '../views/client/About.vue'
import Appointments from '../views/client/Appointments.vue'
import Doctors from '../views/client/Doctors.vue'
import Forums from '../views/client/Forums.vue'
import Health from '../views/client/Health-status.vue'
import Login from '../views/client/Log-in.vue'
import Profile from '../views/client/Profile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Appointments',
    name: 'Appointmets',
    component: Appointments
  },
  {
    path: '/Doctors',
    name: 'Doctors',
    component: Doctors
  },
  {
    path: '/Forums',
    name: 'Forums',
    component: Forums
  },
  {
    path: '/Health-status',
    name: 'Health',
    component: Health
  },
  {
    path: '/Login',
    name: 'Log-in',
    component: Login
  },
  {
    path: '/getting-started',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
