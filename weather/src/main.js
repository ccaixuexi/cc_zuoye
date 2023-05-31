import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./plugins/vue-echart.js";
import * as echarts from "echarts";
import './main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faCircleInfo, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faSun,faCircleInfo,faPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')