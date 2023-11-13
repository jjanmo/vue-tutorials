import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store';
import '@/styles/_reset.scss'; // TODO : 다른 방법으로 글로벌 스타일 적용법 찾아보기

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
