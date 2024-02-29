import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import TodoApp from '@/views/TodoApp.vue';
import MathcingGame from '@/views/MatchingGame.vue';
import MemoryGame from '@/views/MemoryGame.vue';
import Gallery from '@/views/Gallery.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/todoapp', name: 'todoapp', component: TodoApp },
  { path: '/matching', name: 'matching', component: MathcingGame },
  { path: '/memory', name: 'memory', component: MemoryGame },
  { path: '/gallery', name: 'gallery', component: Gallery },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
