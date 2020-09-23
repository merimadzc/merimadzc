import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
/* Vue Router */
import VueRouter from 'vue-router'
/* Bootstrap Vue */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* Vuex Store */
import store from './store.js'

/* import and use jquery */
import JQuery from 'jquery'
window.$ = JQuery

/* Components */
import Home from './components/Home'
/* import PageNotFound from './components/404' - Error Page */ 

/* Style */
import './style.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

/* Create router and routes */
export const router = new VueRouter({
  mode: 'history',
  /* Routers */
  routes: [
    { path: '/', component: Home },
    { path: '*', component: Home },
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})