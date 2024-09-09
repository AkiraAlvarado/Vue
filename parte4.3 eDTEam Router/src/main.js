import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Asegúrate de que la ruta del router sea correcta

const app = createApp(App);
app.use(router);
app.mount('#app');