import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store';
import { initializeStoreModules } from './store/storeAccessor';
import '@/styles/index.scss';

Vue.config.productionTip = false;

initializeStoreModules(store);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
