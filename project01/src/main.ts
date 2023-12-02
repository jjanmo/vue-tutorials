import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import PortalVue from 'portal-vue';
import store from '@/store';
import '@/styles/global.css';

createApp(App)
  .use(store) //
  .use(router)
  .use(PortalVue)
  .mount('#app');
