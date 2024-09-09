
import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'

createApp(App).mount('#app')
App.component('Header', Header)