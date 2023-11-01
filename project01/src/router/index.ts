import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import TodoApp from '@/views/TodoApp.vue';
import LOLMathcing from '@/views/LOLMatching.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/todoapp', name: 'todoapp', component: TodoApp },
  { path: '/lol-matching', name: 'lolmatching', component: LOLMathcing },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
