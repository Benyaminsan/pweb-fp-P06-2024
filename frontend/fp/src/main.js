import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Mengimpor router yang sudah kita buat

createApp(App)
  .use(router)  // Menggunakan router
  .mount('#app');
