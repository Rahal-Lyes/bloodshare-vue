import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // Vérifiez ce chemin

const routes = [
  {
    path: "/",
    name: "home",
    component: Home, // Assurez-vous que Home est défini correctement
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"), // Chargement dynamique
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"), // Chargement dynamique
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
