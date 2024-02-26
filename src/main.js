import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './stores'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')