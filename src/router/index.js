import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Appointments from '../views/Appointments.vue'
import Buddy from '../views/Buddy.vue'
import Doctors from '../views/Doctors.vue'
import Forums from '../views/Forums.vue'
import Health from '../views/Health-status.vue'
import Login from '../views/Log-in.vue'
import Menu from '../views/Menu.vue'
import Presentation from '../views/Presentation.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'

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
    path: '/Buddy',
    name: 'Buddy',
    component: Buddy
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
    path: '/Menu',
    name: 'Menu',
    component: Menu
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
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
