<template>
  <h2>{{ title }}</h2>
  <v-copy />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vCopy from './components/vCopy.vue'

const title = ref('Easy to use Vue-directive')
</script>
