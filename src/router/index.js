import { createRouter, createWebHashHistory } from "vue-router";
import WithPatent from "../components/WithPatent.vue";
import WithoutPatent from "../components/WithoutPatent.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: WithPatent,
    },
    {
      path: "/WithPatent",
      name: "With Patent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: WithPatent,
    },
    {
      path: "/WithoutPatent",
      name: "Without Patent",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: WithoutPatent,
    },
  ],
});

export default router;
