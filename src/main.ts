import * as _ from 'lodash';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, '$_', { value: _ });

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
