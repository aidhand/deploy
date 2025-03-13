<script setup lang="ts">
const bikes = useFetch("/api/bikes");
</script>

<template>
  <div>
    <PageHeading title="Bikes" />

    <div v-if="bikes.status.value === 'success'">
      <div v-if="bikes.data.value">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Name</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="bike in bikes.data.value"
              :key="bike.id"
            >
              <td>{{ bike.id }}</td>
              <td>{{ bike.brand?.name }}</td>
              <td>{{ bike.name }}</td>
              <td>{{ bike.createdAt }}</td>
            </tr>
          </tbody>
        </table>
        <p class="mx-4 my-2">Total bikes: {{ bikes.data.value.length }}</p>
      </div>

      <div v-else>
        <p>No bikes found.</p>
      </div>
    </div>

    <div v-else-if="bikes.status.value === 'error'">
      <p>Error fetching bikes.</p>
    </div>

    <div v-else>
      <p>Loading bikes...</p>
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
