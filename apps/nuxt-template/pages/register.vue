<script setup lang="ts">
definePageMeta({
  layout: "dialog",
});
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <section>
      <PageHeading title="Register" />
    </section>
    <form
      method="post"
      action="/api/auth/register"
      class="p-4 flex flex-col md:flex-row gap-4 bg-dialog b-dialog"
    >
      <section class="flex flex-col gap-4">
        <div>
          <label
            for="firstName"
            class="block"
            >First name</label
          >
          <input
            id="firstName"
            type="text"
            name="firstName"
            class="p-input b-input bg-input w-64"
            required
          />
        </div>

        <div>
          <label
            for="lastName"
            class="block"
            >Last name</label
          >
          <input
            id="lastName"
            type="text"
            name="lastName"
            class="p-input b-input bg-input w-64"
            required
          />
        </div>
      </section>

      <section class="flex flex-col gap-4">
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
            class="p-input b-input bg-input w-64"
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
            class="p-input b-input bg-input w-64"
            required
          />
        </div>

        <div class="text-right">
          <button
            type="submit"
            class="p-button b-button bg-blue-500 text-white hover:opacity-90 focus:opacity-80"
          >
            Register
          </button>
        </div>
      </section>
    </form>
  </div>
</template>
