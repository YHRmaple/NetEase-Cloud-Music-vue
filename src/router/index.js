import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import discover from '../components/discover.vue'
import my from '../components/myMusic.vue'
import friends from '../components/friends.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/discover',
    children: [
      {
        path: '/discover',
        component: discover
      },
      {
        path: '/my',
        component: my
      },
      {
        path: '/friends',
        component: friends
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
