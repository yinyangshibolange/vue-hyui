import Vue from 'vue'
import App from './App.vue'
import installs from "./package/install"
import "./mock"
import http  from "./utils/http"


Vue.config.productionTip = false

Vue.use(installs)

Vue.prototype.$axios = http

new Vue({
  render: h => h(App),
}).$mount('#app')
