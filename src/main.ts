import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import XmwAbout from "./components/XmwAbout.vue";

createApp(App).use(router).use(ElementPlus).component('XmwAbout', XmwAbout).mount('#app')
