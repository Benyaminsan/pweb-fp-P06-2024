import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', redirect: '/login' }, // Redirect default ke login
  { path: '/login', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
];

const router = createRouter({
  history: createWebHistory(), // Untuk penggunaan HTML5 history mode
  routes,
});

export default router;
