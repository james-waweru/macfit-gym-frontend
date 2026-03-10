import { createRouter, createWebHistory } from 'vue-router'
import admin from '@/components/admin.vue'
import bundles from '@/components/bundles.vue'
import gymLocations from '@/components/gym-locations.vue'
import homepage from '@/components/homepage.vue'
import landingpage from '@/components/landingpage.vue'
import login from '@/components/login.vue'
import profile from '@/components/profile.vue'
import signup from '@/components/signup.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

      {
        path: '/',
        name: 'landingpage',
        component: landingpage
      },

      {
        path: '/login',
        name: 'login' ,
        component: login
      },


      {
        path: '/signup',
        name: 'signup',
        component: signup
      },


      {
        path: '/homepage',
        name: 'homepage',
        component: homepage
      },

      {
        path: '/admin',
        name: 'admin',
        component: admin
      },

      {
        path: '/bundles',
        name: 'bundles',
        component: bundles
      },

      {
        path: '/gym-locations',
        name: 'gym-locations',
        component: gymLocations
      },

      {
        path: '/profile',
        name: 'profile',
        component: profile
      }

    ]
})

export default router
