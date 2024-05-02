import Vue from 'vue'
import VueRouter from 'vue-router'
import ListTask from '../views/ListTask.vue'
import FormTask from '../views/FormTask.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'




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
  {
    path: '/register',
    name: 'register',
    component: Register
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
