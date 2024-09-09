import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Importar el store

const app = createApp(App);
app.use(store); // Usar el store en la aplicación
app.mount('#app');