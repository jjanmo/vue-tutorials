import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import User from '@/pages/User.vue';
import New from '@/pages/New.vue';
import Ask from '@/pages/Ask.vue';
import Jobs from '@/pages/Jobs.vue';

const routes = [
  {
    path: '/',
    redirect: '/top',
  },
  {
    path: '/top',
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
  {
    path: `/user/:name`,
    component: User,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history', linkExactActiveClass: 'active' });

export default router;
