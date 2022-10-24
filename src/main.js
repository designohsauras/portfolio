import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')