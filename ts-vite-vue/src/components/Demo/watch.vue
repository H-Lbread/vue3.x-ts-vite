<template>
    <h1>{{ msg }}</h1>测试
    <h1>{{ state.count.count }}</h1>
</template>


<script setup lang="ts">
import { ref,reactive,watch,defineProps } from "vue";
defineProps({
    msg:String
})

const state = reactive({count:{count: 0}})
watch(()=>state.count,(count,prevCount)=>{
    console.log("first watch:",count,prevCount);
    
},{
    deep:true,
    immediate:false
})
setTimeout(() => {
    state.count.count++
}, 1000);

</script>