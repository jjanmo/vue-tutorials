import Home from '@/pages/Home.vue';
import New from '@/pages/New.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/new',
    component: New,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history' });

export default router;
