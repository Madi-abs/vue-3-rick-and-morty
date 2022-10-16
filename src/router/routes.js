import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/homePage";
import CharDetailsPage from "@/pages/charDetailsPage";
import NotFoundPage from "@/pages/notFoundPage";

const routerHistory = createWebHistory();

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/character/:id",
      name: "CharDetails",
      component: CharDetailsPage,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundPage,
    },
  ],
});

export default routers;
