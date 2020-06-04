import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueSocketIO from "vue-socket.io"


Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://3.121.41.235:3000',
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
