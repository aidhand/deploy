<script setup lang="ts">
const brands = useFetch("/api/brands/all");
</script>

<template>
  <div>
    <PageHeading title="Brands" />

    <div v-if="brands.status.value === 'success'">
      <div v-if="brands.data.value">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="brand in brands.data.value"
              :key="brand.id"
            >
              <td>{{ brand.id }}</td>
              <td>
                <NuxtLink
                  :to="`/brands/${brand.name.toLowerCase()}`"
                  class="text-blue-500 hover:underline"
                >
                  {{ brand.name }}
                </NuxtLink>
              </td>
              <td>{{ brand.createdAt }}</td>
            </tr>
          </tbody>
        </table>
        <p class="mx-4 my-2">Total brands: {{ brands.data.value.length }}</p>
      </div>

      <div v-else>
        <p>No brands found.</p>
      </div>
    </div>

    <div v-else-if="brands.status.value === 'error'">
      <p>Error fetching brands.</p>
    </div>

    <div v-else>
      <p>Loading brands...</p>
    </div>
  </div>
</template>

<style scoped>
table {
  @apply w-full;
  @apply border-collapse;
}

table th,
table td {
  @apply px-4 py-2;
  @apply text-left border-b;
}
</style>
