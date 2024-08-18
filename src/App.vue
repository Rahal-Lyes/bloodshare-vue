<template>
  <header>

      <NavBar />

  </header>
  <transition @before-enter="beforeEnter" 
  @after-enter="afterEnter"
  @enter="enter">
    <router-view />
  </transition>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import { gsap } from "gsap";





</script>
