<template>
  <button
    class="px-4 py-2 bg-blue-400 text-slate-950 text-xl rounded-xl font-bold hover:bg-blue-500 hover:text-white"
  >
    {{ props.title }}
  </button>
</template>

<script setup>
const props = defineProps(["title"])
</script>
