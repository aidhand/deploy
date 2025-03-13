<script setup lang="ts">
definePageMeta({
  layout: "dialog",
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <section>
      <PageHeading title="Login" />
    </section>
    <form
      method="post"
      action="/api/auth/login"
      class="p-4 flex flex-col gap-6 bg-light border b-light rounded"
    >
      <section class="flex flex-col gap-6">
        <div>
          <label
            for="email"
            class="block"
            >Email</label
          >
          <input
            id="email"
            type="email"
            name="email"
            class="input w-64"
            required
          />
        </div>

        <div>
          <label
            for="password"
            class="block"
            >Password</label
          >
          <input
            id="password"
            type="password"
            name="password"
            class="input w-64"
            required
          />
        </div>
      </section>

      <div class="text-right">
        <button
          type="submit"
          class="btn btn-primary"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
