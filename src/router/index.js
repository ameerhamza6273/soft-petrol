import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/homePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function () {
    return {
      x: 0,
      y: 0,
    };
  },
  routes,
});

export default router;
