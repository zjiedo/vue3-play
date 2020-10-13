import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue";
import Home from "../views/Home.vue";
import LoadingComponent from "@/components/loading.vue";

const About = defineAsyncComponent({
  loader: () => import("@/views/About.vue"),
  delay: 10000,
  timeout: 3000,
  loadingComponent: LoadingComponent
});

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
