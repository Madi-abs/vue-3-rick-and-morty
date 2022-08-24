import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/homePage';
import AboutPage from '@/pages/aboutPage';
import CharDetailsPage from '@/pages/charDetailsPage';
import NotFoundPage from '@/pages/notFoundPage';

const routerHistory = createWebHistory();

const routers = createRouter({
   history: routerHistory,
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomePage
      },
      {
         path: '/about',
         name: 'about',
         component: AboutPage
      },
      {
         path: '/:id',
         component: CharDetailsPage
      },
      {
         path: '/:CatchAll(.*)',
         name: '404',
         component: NotFoundPage
      }
   ]
})

export default routers;