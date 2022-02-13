<template>
    <h1>{{ msg }}</h1>测试
</template>


<script setup lang="ts">
// watchEffect 不需要手动传入依赖；不是lazy初始化执行分析依赖；无法获取原始值；一些异步操作更合适；watch的第三个参数处理副作用的第一个参数
import { ref,defineProps,watchEffect,onMounted } from "vue";
defineProps({
    msg:String
})
const num = ref(0)

onMounted(()=>{
    console.log("onMounted");
})
// watchEffect提供返回
const stop = watchEffect((onInvalidate)=>{
    console.log("watchEffect在onMounted之前调用",num.value);
    onInvalidate(()={
        // 清除副作用
    })
},{
    onTrigger(e){
        // debugger;
    }
})
setTimeout(() => {
    num.value++
}, 1000);
// 停用监听
stop();
</script>