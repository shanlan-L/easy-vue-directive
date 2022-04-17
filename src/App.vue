<template>
  <h2>{{ title }}</h2>
  <button v-for="component in components" @click="setShowCop(component.name)">
    {{ component.name }}
  </button>
  <v-copy v-if="curCopName === 'vCopy'" />
  <v-lazy v-if="curCopName === 'vLazy'" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vCopy from './components/vCopy.vue'
import vLazy from './components/vLazy.vue'

const title = ref('Easy to use Vue-directive')

const components = [
  { name: 'vCopy', component: vCopy },
  { name: 'vLazy', component: vLazy },
]
const curCopName = ref('vCopy')
const setShowCop = (name: string) => {
  curCopName.value = name
}
</script>
