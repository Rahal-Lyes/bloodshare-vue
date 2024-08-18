<template>
  <button 
  
  :class="buttonClass">
    {{ props.title }}
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String
});

const buttonClass = computed(() => {
  return props.title === 'Login'
    ? 'login-button'
    : 'register-button';
});
</script>

<style scoped>

.login-button {
  @apply px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-xl rounded-xl font-bold hover:bg-blue-500 hover:text-white;
}

.register-button {
  @apply px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-xl rounded-xl font-bold hover:bg-blue-500 hover:text-white;
}
</style>
