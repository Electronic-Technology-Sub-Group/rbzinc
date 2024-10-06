import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import persist from 'pinia-plugin-persistedstate'
import pinia from './stores/index'
import App from './App.vue'
import router from './router/index'
// const pinia = createPinia()
const app = createApp(App)
// app.use(pinia.use(persist))
app.mount('#app')
app.use(pinia)
app.use(router)
