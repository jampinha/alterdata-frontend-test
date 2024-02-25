import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import stores from './stores'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  stores,
  vuetify,
  render: h => h(App)
}).$mount('#app')
