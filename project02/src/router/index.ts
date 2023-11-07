import Home from '@/pages/Home.vue';
import New from '@/pages/New.vue';
import Ask from '@/pages/Ask.vue';
import Jobs from '@/pages/Jobs.vue';
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
  {
    path: '/ask',
    component: Ask,
  },
  {
    path: '/jobs',
    component: Jobs,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history', linkExactActiveClass: 'active' });

export default router;
