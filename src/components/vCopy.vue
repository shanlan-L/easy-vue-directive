<template>
  <h2>v-copy</h2>
  <div>{{ copyConfig.value }}</div>
  <button v-copy="copyConfig">复制</button>
  <button @click="(copyConfig.value as number)++">+</button>
  <button @click="(copyConfig.value as number)--">-</button>
</template>

<script setup lang="ts" >
import { reactive } from 'vue';
import { CopyConfig } from '../../scripts';

const copyConfig = reactive<CopyConfig>({
  value: 1,
  success: () => {
    console.log('success')
  }
})

</script>