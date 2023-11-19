import Vue from 'vue';
import VueRouter from 'vue-router';
import ListView from '@/pages/ListView.vue';
import User from '@/pages/User.vue';

const routes = [
  {
    path: '/',
    redirect: '/top',
  },
  {
    path: '/top',
    component: ListView,
  },
  {
    path: '/new',
    component: ListView,
  },
  {
    path: '/ask',
    component: ListView,
  },
  {
    path: '/jobs',
    component: ListView,
  },
  {
    path: `/user/:name`,
    component: User,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history', linkExactActiveClass: 'active' });

export default router;
