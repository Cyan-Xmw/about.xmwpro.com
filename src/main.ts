import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/css/css-vars.css'
import XmwAbout from "./components/XmwAbout.vue";
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'
// 个人信息
import myinfo from "./myInfo"
import 'animate.css'


const app = createApp(App)
app.config.globalProperties.myinfo = myinfo
app.use(router).use(ElementPlus).use(VueFullPage).component('XmwAbout', XmwAbout).mount('#app')
