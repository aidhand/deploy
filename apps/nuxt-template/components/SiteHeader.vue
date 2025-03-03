<script setup lang="ts">
const { loggedIn, user, clear } = useUserSession();
</script>

<template>
  <div class="border-b b-light bg-light">
    <header class="p-4 mx-auto container">
      <div class="flex flex-row items-center justify-between gap-4">
        <h1 class="text-xl font-semibold tracking-tight">Site header</h1>
        <nav class="flex flex-row gap-8">
          <div class="flex flex-row gap-4">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/users">Users</NuxtLink>
          </div>
        </nav>
        <aside>
          <div
            v-if="loggedIn"
            class="flex flex-row gap-4"
          >
            <NuxtLink to="/profile">{{ user?.firstName }}</NuxtLink>
            <a @click.prevent="clear">Logout</a>
          </div>

          <div
            v-else
            class="flex flex-row gap-4"
          >
            <NuxtLink to="/login">Login</NuxtLink>
            <NuxtLink to="/register">Register</NuxtLink>
          </div>
        </aside>
      </div>
    </header>
  </div>
</template>
