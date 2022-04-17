# easy-vue-directive

更简单的去使用 Vue 指令

### 安装

```
npm install easy-vue-directive --save
```

### 引入

```
import easyVueDirective from 'easy-vue-directive'

createApp(App).use(easyVueDirective)
```

### v-copy

示例文件: src/components/vCopy.vue

```
<button v-copy="copyConfig"></button>

const copyConfig = reactive<CopyConfig>({
  value: 1, // 触发复制事件后，剪切框中的值
  event: 'click', // 触发复制的事件类型，默认 click
  success: (copyValueRef) => {} // 复制成功的回调
})
```

### v-lazy

示例文件: src/components/vLazy.vue

```
<img v-lazy="imgSrc" /> // imgSrc 图片的地址，可以为函数 return 出图片地址

```
