import { createWebHistory, createRouter } from 'vue-router';
import ListPage from '@/pages/ListPage';
import FavoritesListPage from '@/pages/FavoritesListPage';

const routes = [
  {
    path: '/',
    name: 'ListPage',
    component: ListPage,
  },
  {
    path: '/favorites',
    name: 'FavoritesListPage',
    component: FavoritesListPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;