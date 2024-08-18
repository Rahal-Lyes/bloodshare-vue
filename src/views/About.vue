<template>
  <div
    class="h-screen "
    :class="{'pt-96': store.state.isVisible, 'pt-28':!store.state.isVisible}"
  >
    <div>
      
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>
