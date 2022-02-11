<template>
    <h1>{{ msg }}</h1>测试
    <h2>{{count}}</h2>
</template>


<script setup lang="ts">
import { ref,onMounted,defineProps,computed } from "vue";
defineProps({
    msg:String
})

// const count = ref(1);
// const pulsOne = computed(()=>count.value+1)
// console.log("pulsOne",pulsOne,pulsOne.value);
// pulsOne 返回一个 只读   所以不能直接  puleOne.value++
const count = ref(1);
const plusOne = computed({
    get: () => count.value + 1,
    set: (val)=>{
        count.value = val - 1
    }
});
plusOne.value++
</script>