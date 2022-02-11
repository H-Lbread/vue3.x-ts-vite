## ref和reactive深入

```html
<script setup lang="ts">
    import { ref,reactive } from "vue";
    
</script>
```

- ref: 就是一般某个元素 简单数据类型
- reactive: 对象 复杂数据类型


ref(null) 的时候代表 html :

```js
const root = ref(null)  // ref(null) 的时候代表 html
```

---------------
```js
const count = ref(1);
const pulsOne = computed(()=>count.value+1)
console.log("pulsOne",pulsOne,pulsOne.value);
// pulsOne 返回一个 只读   所以不能直接  puleOne.value++
```
解决方法：⬇️    加个屏障
```js
const count = ref(1);
const plusOne = computed({
    get: () => count.value + 1,
    set: (val)=>{
        count.value = val - 1
    }
});
plusOne.value++
```
