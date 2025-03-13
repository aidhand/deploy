<script setup lang="ts">
interface NavBarProps {
  items: {
    title: string;
    url: string;
  }[];
}
const props = defineProps<NavBarProps>();
</script>

<template>
  <nav class="flex flex-row gap-4">
    <div
      v-for="item in props.items"
      :key="item.url"
    >
      <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
    </div>
  </nav>
</template>

<style scoped></style>
