import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AccountsPage from './pages/AccountsPage.vue';
import AccountDetailsPage from './pages/AccountDetailsPage.vue';
import CategoriesPage from './pages/CategoriesPage.vue';
import CategoryDetailsPage from './pages/CategoryDetailsPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

createApp(App)
  .use(
    createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/accounts',
          alias: '/',
          component: AccountsPage,
        },
        {
          path: '/accounts/:accountId',
          component: AccountDetailsPage,
        },
        {
          path: '/categories',
          alias: '/',
          component: CategoriesPage,
        },
        {
          path: '/categories/:categoryId',
          component: CategoryDetailsPage,
        },
        {
          path: '/:pathMatch(.*)*',
          component: NotFoundPage,
        },
      ],
    })
  )
  .use(bootstrap)
  .mount('#app');
