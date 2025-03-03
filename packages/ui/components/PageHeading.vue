<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <h1>
    {{ props.title }}
  </h1>
</template>

<style scoped>
h1 {
  @apply text-4xl font-bold tracking-tight;
}
</style>
