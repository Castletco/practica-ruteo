import Vue from 'vue'
import App from './App.vue'
import router from './router';  // añadimos esta línea
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router,                     // y esta también
}).$mount('#app')
