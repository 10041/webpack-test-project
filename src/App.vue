<template>
  <h1 class="text-center">Hello World {{ test }}</h1>
  <h2>test</h2>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const test = ref('testa')

onMounted(() => {
  console.log(process.env.TEST_ENV)
})
</script>

<style lang="scss">
$color: red;
h2 {
  color: $color;
}
</style>