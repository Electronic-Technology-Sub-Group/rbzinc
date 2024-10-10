import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import './assets/main.scss'
//全局组件
import Header from './components/header/header.vue'
import Search from './components/search/search.vue'
const app = createApp(App)
app.component('Search',Search)
app.component('Header',Header)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
