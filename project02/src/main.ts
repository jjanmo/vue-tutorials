import Vue from 'vue';
import App from './App.vue';
import router from '@/router';

// TODO : 다른 방법으로 글로벌 스타일 적용법 찾아보기
import '@/styles/_reset.scss';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
