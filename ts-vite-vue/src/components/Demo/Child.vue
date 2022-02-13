<template>
  <h1>{{ theme }}</h1>
  测试
</template>

<script setup lang="ts">
    import {
    defineConponent,
    inject,
    Ref,
    watchEffect
    } from "vue";
export default defineConponent({
    name:"Child",
    setoup(){
        const theme = inject("test","vvvvvvue3");
        watchEffect(()=>{
            console.log("主题被调用了",(theme as unkown as Ref<string>).value);
        })
        return {
            theme
        }
    }

})

</script>
