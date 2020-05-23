import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router';

Vue.config.productionTip = false;
window.axios = require('axios');

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
