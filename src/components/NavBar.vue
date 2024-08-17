<template>
  <div
    class="w-full shadow-xl fixed items-center flex justify-between py-4 transition-all duration-300 ease-in-out"
    :class="{ 'h-14': !isVisible, 'h-96': isVisible }"
  >
    <div
      class="px-10 flex justify-between items-center w-full h-full max-lg:flex-col"
    >
      <div class="text-2xl font-semibold">
        <router-link to="/" class="text-red-500">
          <span class="font-sail">S</span>hare
          <font-awesome-icon :icon="['fas', 'droplet']" />
          <span class="font-sail">B</span>loob
        </router-link>
      </div>

      <!-- Menu de navigation -->
      <nav
        :class="{ 'hidden lg:flex': !isVisible, 'block lg:flex': isVisible }"
        class="flex flex-row gap-5 items-center max-md:flex-col"
      >
        <ul
          v-for="link in links"
          :key="link.name"
          class="text-blue-1 text-xl font-medium"
        >
          <router-link
            :to="link.path"
            class="hover:text-red-400 hover:text-sl hover:font-bold ease-in duration-200"
          >
            <li>
              <font-awesome-icon :icon="['fas', link.icon]" />
              {{ link.name }}
            </li>
          </router-link>
        </ul>

        <login title="Login" />
      </nav>
    </div>

    <!-- Bouton pour menu mobile -->
    <div class="lg:hidden px-8 text-xl" @click="toggleNav">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import Login from "./Login.vue"

// Initialiser à false pour masquer le menu par défaut
const isVisible = ref(false)

const toggleNav = () => {
  isVisible.value = !isVisible.value
}

const links = [
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
    name: "Login",
    path: "login",
    icon: "sign-in-alt",
  },
  {
    name: "Register",
    path: "register",
    icon: "user-plus",
  },
]
</script>
