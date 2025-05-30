import { createApp } from 'vue'
import App from './App.vue'
import './style.css'  
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.AOS = AOS.init({ duration: 1000 })
createApp(App).mount('#app')