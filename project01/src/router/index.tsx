import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TodoAppVue from '@/views/TodoApp.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/todoapp', name: 'todoapp', component: TodoAppVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active',
});

export default router;
