import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Initiatives from '../views/Initiatives.vue'
import Events from '../views/Events.vue'
import About from '../views/About.vue'
import Join from '../views/Join.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/initiatives',
      name: 'initiatives',
      component: Initiatives
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
