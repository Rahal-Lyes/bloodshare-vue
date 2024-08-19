<template>
   <div class="flex flex-col">
    <header>
    <NavBar />
  </header>
  <main class="flex-grow">
      <router-view />
    </main>
<Footer/>
   </div>
 
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

</script>
