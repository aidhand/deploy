<script setup lang="ts">
definePageMeta({
  layout: "dialog",
});
</script>

<template>
  <div class="m-4 flex flex-col gap-4">
    <section>
      <PageHeading title="Register" />
    </section>
    <form
      method="post"
      action="/api/auth/register"
      class="p-4 flex flex-col gap-6 bg-light border b-light rounded"
    >
      <section class="flex flex-col md:flex-row gap-6">
        <div class="flex flex-col gap-6">
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
              class="input w-64"
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
              class="input w-64"
              required
            />
          </div>
        </div>

        <div class="flex flex-col gap-6">
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
        </div>
      </section>

      <div class="text-right">
        <button
          type="submit"
          class="btn btn-primary"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>
