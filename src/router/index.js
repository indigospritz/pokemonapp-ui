import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    id: 1,
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    id: 2,
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/DashboardView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
