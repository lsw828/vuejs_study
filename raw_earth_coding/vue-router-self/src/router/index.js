import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter')
      next()
    },
    children: [
      {
        path: ':id',
        name: 'users-detail',
        component: () => import(/* webpackChunkName: "users-detail" */ '../views/UsersDetail.vue'),  
      },
      {
        path: ':id/edit',
        name: 'users-edit',
        component: () => import(/* webpackChunkName: "users-edit" */ '../views/UsersEdit.vue'),  
      }
    ]
  },
  {
    path: '/redirect-me',
    redirect: {name: 'users'}
  },
  {
    path: '/*',
    redirect: {name: 'home'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
