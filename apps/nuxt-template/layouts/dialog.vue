<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col gap-4">
    <SiteHeader />

    <div class="p-4 flex flex-center flex-grow">
      <main>
        <slot />
      </main>
    </div>

    <SiteFooter />
  </div>
</template>
