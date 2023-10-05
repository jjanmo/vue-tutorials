import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import TodoAppVue from '@/views/TodoApp.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/todoapp', name: 'todoapp', component: TodoAppVue },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: 'active',
});

export default router;
