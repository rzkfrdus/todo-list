import Vue from 'vue'
import 'animate.css';
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router'

Vue.config.productionTip = false
Vue.use(VeeValidate);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
