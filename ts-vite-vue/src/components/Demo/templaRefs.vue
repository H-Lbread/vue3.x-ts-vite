<template>
    <h1>{{ msg }}</h1>测试
    <input type="text" ref="root" value="ref使用示例" />
</template>


<script setup lang="ts">
import { ref,onMounted,defineProps } from "vue";
defineProps({
    msg:String
})
const root = ref(null)  // ref(null) 的时候代表 html
// 在DOM首次渲染完成之后 才能获取到真实的dom
onMounted(()=>{
    console.log("🐻",root.value);
    
})
</script>