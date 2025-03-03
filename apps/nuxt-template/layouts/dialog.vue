<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />

    <div class="p-4 flex flex-center flex-grow">
      <main class="flex flex-col gap-4">
        <slot />
      </main>
    </div>

    <SiteFooter />
  </div>
</template>
