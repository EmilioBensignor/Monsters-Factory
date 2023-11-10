import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonstersView from '../views/MonstersView.vue'
import MuseoView from '../views/MuseoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/monsters',
    name: 'monsters',
    component: MonstersView,
    props: route => ({ arrayMonstruos: route.meta.arrayMonstruos })
  },
  {
    path: '/museo',
    name: 'museo',
    component: MuseoView,
    props: route => ({ arrayMuseo: route.meta.arrayMuseo })
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
