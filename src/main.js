import { createApp } from 'vue'
import App from './App.vue'
import './static/css/index.css'
import './static/js/index'
import router from './routes'
createApp(App).use(router).mount('#app')
