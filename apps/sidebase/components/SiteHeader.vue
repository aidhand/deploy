<script setup lang="ts">
const { status, data } = useAuth();
</script>

<template>
  <header class="px-4 py-8">
    <div class="mx-auto container flex justify-between items-center gap-8">
      <a href="/" class="text-lg font-medium">
        <h1>Simple App</h1>
      </a>

      <nav class="flex gap-4">
        <NuxtLink href="/todo">Todo</NuxtLink>
        <NuxtLink href="/about">About</NuxtLink>
        <NuxtLink href="/test">Test</NuxtLink>
      </nav>
      <div>
        <nav v-if="status === 'authenticated'" class="flex gap-4">
          <NuxtLink href="/user">{{ data?.user?.name }}</NuxtLink>
          <a href="/auth/logout">Logout</a>
        </nav>

        <nav v-else class="flex gap-4">
          <NuxtLink href="/auth/login">Login</NuxtLink>
          <NuxtLink href="/auth/register">Register</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
