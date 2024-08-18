<template>
    <div
      class=" h-screen bg-home bg-cover bg-center " 
      :class="{'pt-96': store.state.isVisible, 'pt-28':!store.state.isVisible}"

    >

    <div class="relative w-full max-w-lg filter blur-2xl opacity-40">
        <div class="absolute -top-10  left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply "></div>
        <div class="absolute -top-10 -right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply"></div>
        <div class="absolute -top-10 -right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply"></div>
    </div>
   <div class=" absolute top-64 left-36">

    <h1  class="text-blue-400 text-4xl blur-xs
      font-bold">Blood Donation: {{ currentText }}</h1>

      <div class="max-w-xl pt-10">
        <p class="text-gray-500 text-xl">Our mission is to bridge the gap between blood donors and recipients, providing a seamless and efficient </p> 
      <p class="text-gray-500 text-xl pb-8">   experience for both parties. You can trust us, we provide the best service.</p>
   <router-link :to="{name:'register'}">
    <login title="Register" />
   </router-link>
   </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ref,onMounted} from "vue";
  import { useStore } from "vuex";
import login from "../components/Login.vue";
  const store = useStore();
  const texts=ref(["Blood Donation", "Save Lives", "Be a Hero"])
  let index=ref(0)  
  const currentText = ref(texts.value[0]); 
  const startTextChange = () => {
      setInterval(() => {
        index.value = (index.value + 1) % texts.value.length;
        currentText.value = texts.value[index.value];
      }, 1500); 
    };
    onMounted(() => {
      startTextChange();
    });

 
  </script>