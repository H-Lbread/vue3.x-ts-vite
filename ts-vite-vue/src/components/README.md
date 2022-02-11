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