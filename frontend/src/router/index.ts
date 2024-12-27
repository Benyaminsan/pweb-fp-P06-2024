import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "@/views/LoginForm.vue";
import Rules from "@/views/Rules.vue";

import DataBarang from '@/components/DataBarang.vue';
import DataPetugas from '@/components/DataPetugas.vue';
import DataPinjam from '@/components/DataPinjam.vue';
import AdminPage from "@/components/AdminPage.vue";

const routes = [
  { 
    path: "/",
    component: LoginForm
  },
  {
    path: "/rules",
    component: Rules // Add the rules route
  },
  { path: '/admin', component: DataBarang },
  { path: '/admin/all-operator', component: DataPetugas },
  { path: '/admin/summary', component: DataPinjam },
  { path: '/admin-page', component: AdminPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});