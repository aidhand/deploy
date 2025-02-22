<script setup lang="ts">
const { loggedIn, user, session, clear } = useUserSession();
</script>

<template>
  <div>
    <header>
      <div v-if="loggedIn">
        <h1>Welcome {{ user?.firstName }}!</h1>
        <p>Logged in since {{ session.loggedInAt }}</p>
        <button @click="clear">Logout</button>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
