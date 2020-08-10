import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import subMenu from '../components/subMenu.vue'
import discover from '../components/discover/discover.vue'
import album from '../components/discover/album.vue'
import artist from '../components/discover/artist.vue'
import djradio from '../components/discover/djradio.vue'
import playlist from '../components/discover/playlist.vue'
import toplist from '../components/discover/toplist.vue'
import my from '../components/myMusic.vue'
import friends from '../components/friends.vue'
import download from '../components/download.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/discover',
    children: [
      {
        path: '/subMenu',
        component: subMenu,
        redirect: '/discover',
        children: [
          {
            path: '/discover',
            component: discover
          },
          {
            path: '/discover/album',
            component: album
          },
          {
            path: '/discover/artist',
            component: artist
          },
          {
            path: '/discover/djradio',
            component: djradio
          },
          {
            path: '/discover/playlist',
            component: playlist
          },
          {
            path: '/discover/toplist',
            component: toplist
          }
        ]
      },
      {
        path: '/my',
        component: my
      },
      {
        path: '/friends',
        component: friends
      },
      {
        path: '/download',
        component: download
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
