<template>
<h1>{{msg}}</h1>
test
{{ count }}
<!-- <h3>{{obj.text}}</h3> -->
<!-- 解构出来的操作 -->
<h3>...toRefs解构出来的操作: {{text}}</h3> 
</template>

<script setup lang="ts">
    import { ref,reactive,defineProps,toRefs } from "vue";
    // ref : 接收简单数据
    // reactive : 接收复杂  如 对象
    defineProps({
        msg:String
    })
    const count = ref(0)
    console.log('count1:',count.value);
    count.value++
    console.log('count2:',count.value);
    // 使用reactive包裹单独的ref
    const state = reactive({
        count
    })
    console.log('state',state);

    const obj = reactive({
        text:"对象",
        adderss:"地址xxx"
    })
    // 可以直接解构出来⬇️
    const {text} = {...toRefs(obj)}
    
</script>