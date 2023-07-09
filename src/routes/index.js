import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

import Home from "@/views/home";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "Trang chủ" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
  linkExactActiveClass: "is-active",
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  nextTick(() => {
    if (to.meta.title) {
      document.title =
        process.env.VUE_APP_TITLE + " | " + to.meta.title ||
        "Phần mềm hiệu quả";
    }
  });
});

export function resetRouter() {
  router.go(0);
}

export default router;
