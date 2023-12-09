<template>
  <h1 class="text-center">Hello World</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log(process.env.TEST_ENV)
})
</script>

<style scoped>

</style>