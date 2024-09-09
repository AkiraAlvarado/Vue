import { createRouter, createWebHistory } from 'vue-router'
import Home1 from '@/components/Home1.vue'
import Home2 from '@/components/Home2.vue'
import Products1 from '@/components/Products1.vue'
import Products2 from '@/components/Products2.vue'
import Productview from '@/components/Productview.vue'
import twits from '@/components/twit.vue'
import posts from '@/components/post.vue'
import New from '@/components/New.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home/home1'  // Redirige a Home1 por defecto
    },
    {
      path: '/home',
      name: 'Home',
      children: [
        {
          path: 'home1',
          name: 'Home1',
          component: Home1
        },
        {
          path: 'home2',
          name: 'Home2',
          component: Home2
        }
      ]
    },
    {
      path: '/products',
      name: 'Products',
      children: [
        {
          path: 'products1',
          name: 'Products1',
          component: Products1
        },
        {
          path: 'products2',
          name: 'Products2',
          component: Products2
        },
        {
          path: 'New',
          name: 'New',
          component: New
        },
        {
          path: 'productsView/:id',
          name: 'productsView',
          component: Productview,
          children: [
            { path: 'post', name: 'post', component: posts },
            { path: 'twit', name: 'twit', component: twits }

          ]
        }
      ]
    }
  ]
})

export default router
