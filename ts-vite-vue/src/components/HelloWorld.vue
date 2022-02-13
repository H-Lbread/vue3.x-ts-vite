<template>
  <h1>{{ msg }}</h1>
  <Child />
</template>

<script setup lang="ts">
import { defineProps,provide,onMounted,ref } from "vue";
import Child from "./Demo/Child";
defineProps({
  msg: String,
});
cosnt themeRef = ref("dark");
provide("test",themeRef);
setTimeout(() => {
    themeRef.value = 'red'
}, 1000);

</script>
