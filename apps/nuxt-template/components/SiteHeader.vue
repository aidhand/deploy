<script setup lang="ts">
const appConfig = useAppConfig();
const { loggedIn, user, clear } = useUserSession();

const navItems = ref([
  { title: "Bikes", url: "/bikes" },
  { title: "Gear", url: "/gear" },
  { title: "Parts", url: "/parts" },
  { title: "Accessories", url: "/accessories" },
  { title: "Brands", url: "/brands" },
  // { title: "Guides", url: "/guides" },
]);
</script>

<template>
  <div class="border-b b-light bg-light font-medium tracking-tight">
    <header class="p-2 mx-auto container">
      <div class="flex flex-row items-center justify-between gap-4">
        <SiteLogo>
          <Icon name="tabler:motorbike-filled" />
          <h1 class="font-bold tracking-tighter">{{ appConfig.name }}</h1>
        </SiteLogo>
        <NavBar :items="navItems" />

        <div>
          <div
            v-if="loggedIn"
            class="flex flex-row gap-4"
          >
            <NuxtLink to="/profile">{{ user?.firstName }}</NuxtLink>
            <button @click="clear">Logout</button>
          </div>
          <div
            v-else
            class="flex flex-row gap-4"
          >
            <NuxtLink to="/auth/login">Login</NuxtLink>
            <NuxtLink to="/auth/register">Register</NuxtLink>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
