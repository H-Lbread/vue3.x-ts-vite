<template>
  <h1>{{ msg }}</h1>
  测试
</template>

<script setup lang="ts">
import {
  defineProps,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured
} from "vue";
defineProps({
  msg: String,
});
/**
 * 2.x 和 3.x 对比
 *  beforeCreate --> use setup()
 *  creted --> use setup()
 *  
 *  BeforeMount --> onBeforeMount
 *  mounted --> onMounted
 *  beforeUpdate --> onBeforeUpdate
 *  updated --> onUpdate
 *  beforeDestroy --> onBeforeUnmount
 *  destroyed --> onUnmounted
 *  errorCatured --> onErrorCatured
 */

onBeforeMount(()=>{
    console.log("onBeforeMount");
    
})
onMounted(()=>{
    console.log("onMounted");
    
})
onBeforeUpdate(()=>{
    console.log("onBeforeUpdate");
    
})
onUpdated(()=>{
    console.log("onUpdated");
    
})
onBeforeUnmount(()=>{
    console.log("onBeforeUnmount");
    
})
onUnmounted(()=>{
    console.log("onUnmounted");
    
})
onErrorCaptured(()=>{
    console.log("onErrorCaptured");
    
})
</script>
