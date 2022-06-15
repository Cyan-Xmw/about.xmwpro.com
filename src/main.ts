import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import XmwAbout from "./components/XmwAbout.vue";
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

createApp(App).use(router).use(ElementPlus).use(VueFullPage).component('XmwAbout', XmwAbout).mount('#app')
