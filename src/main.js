import { createApp } from 'vue'

import Axios from 'axios'
import fetchJsonp from 'fetch-jsonp'



import App from './App.vue'
import router from './router'
import store from './store'
import Storage from './models/storage';
import baiduMixin from './mixin/exercise/baiduMixin'

// 原
// createApp(App).use(store).use(router).mount('#app')


// 新 
const app = createApp(App).use(store).use(router)

app.config.globalProperties.Axios=Axios;   //this.Axios
app.config.globalProperties.Storage=Storage;   //this.Storage
app.config.globalProperties.fetchJsonp=fetchJsonp;   //this.fetchJsonp

//全局导入
// app.mixin(baiduMixin)

app.mount('#app')

