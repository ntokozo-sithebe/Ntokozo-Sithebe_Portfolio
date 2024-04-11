import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/min/dist/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(store).use(router).mount('#app')
