<template>
  <div
  
    :class="{ 'pt-96': store.state.isVisible, 'pt-28': !store.state.isVisible }"
  >

  <div class="flex flex-col relative">
  
    <img
          class="w-72 h-72 mx-auto max-lg:w-40 max-lg:h-40"
          src="../assets/red-crescent.png"
          alt="Blood"
        />
        <Filter ></Filter>
        <h1 class="text-3xl text-center text-blue-950 font-bold py-8">WELCOME TO SHARE BLOOD</h1>
        <h1 class="text-center text-blue-950  text-2xl">Connecting The Donors...</h1>
       <div class=" m-0 m-auto w-3/4">
        <p class="text-center text-blue-950 p-10 text-xl leading-10">
          Welcome to Share Blood, a dedicated community-driven platform that
          aims to connect blood donors and recipients seamlessly. Our mission is
          to bridge the gap in the healthcare industry by making blood donation
          more accessible and efficient by avoiding the intermediaries,
          ultimately saving lives and fostering solidarity within the community.
        </p>
       </div>
      </div>
    </div> 
</template>

<script setup>
import Filter from "../components/Filter.vue";
import { useStore } from "vuex";
const store = useStore();
</script>
