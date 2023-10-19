import Vue, { createApp } from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import router from '@/router';
import store from '@/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/styles/global.css';

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

const app = createApp(App);

app.mount('#app');
