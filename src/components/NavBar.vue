<template>
  <div
    class="w-full h-auto fixed items-center flex justify-between py-4 transition-all duration-300 ease-in-out shadow-md bg-white z-50"
  >
    <div
      class="px-10 flex justify-between items-center w-full h-18 max-lg:flex-col"
    >
      <div class="text-2xl font-semibold">
        <router-link :to="{ name: 'home' }" class="text-red-500">
          <span class="font-sail">S</span>hare
          <font-awesome-icon :icon="['fas', 'droplet']" />
          <span class="font-sail">B</span>loob
        </router-link>
      </div>

   

      <nav
        :class="{
          'hidden lg:flex': !store.state.isVisible,
          'block lg:flex': store.state.isVisible,
        }"
        class="flex flex-row gap-5 items-center max-md:flex-col"
      >
        <ul
          v-for="link in links"
          :key="link.name"
          class="text-blue-1 text-md font-medium flex flex-row gap-5"
        >
          <router-link
            :to="link.path"
            class="hover:text-red-400 hover:font-bold ease-in duration-200"
          >
            <li>
              <font-awesome-icon :icon="['fas', link.icon]" />
              {{ link.name }}
            </li>
          </router-link>
        </ul>

        <login title="Login" icon="sign-in-alt" />
      </nav>
    </div>

    <!-- Bouton pour menu mobile -->
    <div class="lg:hidden px-8 text-xl" @click="store.commit('toggleNav')">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { gsap } from "gsap";

import { useStore } from "vuex";
const store = useStore();
import Login from "./Login.vue";

const links = [
  {
    name: "Home",
    path: "/",
    icon: "fa-house",
  },
  {
    name: "About",
    path: "about",
    icon: "exclamation",
  },
  {
    name: "Contact",
    path: "contact",
    icon: "faHeadset",
  },
  {
    name: "Find Donor",
    path: "findDonor",
    icon: "search",
  },

  {
    name: "Register",
    path: "register",
    icon: "user-plus",
  },
];
</script>
