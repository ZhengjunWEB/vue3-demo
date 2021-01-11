import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'

// 初始化css
import './assets/css/normalize.css'
import './assets/css/element.scss'

// 自定义组件
import biBase from './components/biBase/index'
import biSearchs from './components/biSearchs/index'
import charts from './components/charts/index'

// 自定义css
import './assets/css/main.scss'

createApp(App).use(store).use(router).use(ElementPlus,{ locale }).use(biBase).use(biSearchs).use(charts).mount('#app')
