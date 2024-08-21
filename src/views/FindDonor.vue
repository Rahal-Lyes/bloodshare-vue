<template>
  <div
    class="h-auto flex justify-center flex-col items-center"
    :class="{ 'pt-96': store.state.isVisible, 'pt-28': !store.state.isVisible }"
  >
    <div class="w-2/3 flex flex-row max-md:flex-col">
      <Option :arrayOf="bloodTypes" label="Blood type" />
      <Option :arrayOf="Wilaya" label="Daira" />
      <Option :arrayOf="Wilaya" label="Daira" />
    </div>
    <div class="w-1/3 py-4 "> <Login  title="Find" class="w-full text-2xl font-bold" /> </div>
  </div>
</template>

<script setup>
import Option from "../components/Option.vue";
import Login from "../components/Login.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const type = ref("");
const bloodTypes = ["A+", "A-", "B+", "B-", "AB-", "AB+", "O-", "O+"];
const Wilaya = ["Alger", "Bouira", "Tizi-ouzou", "Oran"];
const daira = ["bechloul", "el esnam"];
</script>
