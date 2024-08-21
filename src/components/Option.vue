<template>
  <div class=" flex justify-center items-center">
    <div class="p-10">
      <label class="text-xl text-blue-900 block font-semibold py-5"
        >{{ label }} :<span class="text-red-500">*</span></label
      >
      <select v-model="type" class=" py-4  px-10  bg-white rounded-md border-2 focus:bg-slate-100 border-violet-300 text-xl font-medium
      ">
        <option value=""  class="" disabled selected>Select {{ label  }}</option>
        <option v-for="option in arrayOf" :key="option" :value="option">

          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
const type = ref("");
const props = defineProps({
  arrayOf: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
