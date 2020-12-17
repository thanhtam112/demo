import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/Home.vue'),
    },
    {
      path:'/register',
      name: 'register',
      component: () => import('../components/Register.vue')
    }
    
     
  ]
})

export default router