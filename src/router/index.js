import Vue from 'vue'
import VueRouter from 'vue-router'
import ListTask from '../views/ListTask.vue'
import FormTask from '../views/FormTask.vue'
import Login from '../views/Login.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListTask
  },
  {
    path: '/form',
    name: 'form',
    component: FormTask
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
