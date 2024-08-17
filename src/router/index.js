import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    Component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    Component: () => import("../views/About.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
