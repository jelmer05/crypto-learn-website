import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Account from "../views/Account.vue";
import Notfound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/account",
      name: "account",
      component: Account,
    },
    {
      path: "/:catchall(.*)*",
      name: "404",
      component: Notfound,
    },
  ],
});

export default router;
