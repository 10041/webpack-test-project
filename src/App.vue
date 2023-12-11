<template>
  <v-app>
    <v-navigation-drawer expand-on-hover :rail="true" color="primary">
      <v-list density="compact" :nav="true">
        <v-list-item prepend-icon="mdi-home-outline" title="Todo list" value="todo" />
        <v-list-group value="patterns">
          <template #activator="{ props }: { props: Record<string, unknown> }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-lock-pattern"
              title="Patterns"
            />
          </template>
          <v-list-item prepend-icon="mdi-lock-pattern" title="Prototype" value="prototype" />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <h1>{{ test }}</h1>
      <h2>{{ testEnv }}</h2>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const test = ref('Test title')
const testEnv = process.env.TEST_ENV

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
