<template>
  <h2>v-copy</h2>
  <div>{{ copyConfig.value }}</div>
  <button v-copy="copyConfig">复制</button>
  <button @click="(copyConfig.value as number)++">+</button>
  <button @click="(copyConfig.value as number)--">-</button>
</template>

<script setup lang="ts" >
import { reactive } from 'vue';
import { CopyConfig } from 'easy-vue-directive';

const copyConfig = reactive<CopyConfig>({
  value: 1,
  success: (copyValueRef) => {
    console.log(copyValueRef?.value);
  },
  event: 'click'
})

</script>