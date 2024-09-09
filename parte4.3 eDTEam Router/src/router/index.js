import { createRouter, createWebHistory } from 'vue-router';
import Home1 from '../components/Home1.vue';  // Asegúrate de que estas rutas sean correctas
import Home2 from '../components/Home2.vue';
import Products1 from '../components/Products1.vue';
import Products2 from '../components/Products2.vue';

const routes = [
  {
    path: '/',
    redirect: '/home/home1'  // Redirige a Home1 por defecto
  },
  {
    path: '/home',
    name: 'Home',
    component: { template: '<router-view></router-view>' },  // <router-view> para renderizar hijos
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
    component: { template: '<router-view></router-view>' },  // Router-view para las subrutas
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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;