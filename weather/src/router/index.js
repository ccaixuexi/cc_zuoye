import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeatherSelected from '../views/WeatherSelected.vue'
import WeatherReturn from '../views/WeatherReturn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: '/weatherselected',
    name: 'weatherselected',
    component: WeatherSelected
  },
  {
    path: '/weatherreturn',
    name: 'weatherreturn',
    component: WeatherReturn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
