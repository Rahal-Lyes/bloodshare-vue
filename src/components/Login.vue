<template>
  <button :class="buttonClass">
    {{ title }}
    <font-awesome-icon :icon="['fas', icon]" v-if="icon" />
  </button>
</template> 

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: false } // Corrected `required` to `false`
});

const buttonClass = computed(() => {
  if (props.title === 'Login') {
    return 'login-button';
  } else if (props.title === 'Register') {
    return 'register-button';
  } else if (props.title === 'Find') {
    return 'find-button';
  }
  return ''; // Or a default class if needed
});
</script>

<style scoped>
.login-button { 
  @apply px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-base rounded-xl font-bold hover:bg-blue-500 hover:text-white;
}

.register-button {
  @apply px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-xl rounded-xl font-bold hover:bg-blue-500 hover:text-white;
}

.find-button {
  @apply px-8 py-3 bg-gradient-to-r from-violet-400 to-blue-500 text-slate-950 text-2xl rounded-xl font-bold hover:bg-blue-500 hover:text-white;
}
</style>
