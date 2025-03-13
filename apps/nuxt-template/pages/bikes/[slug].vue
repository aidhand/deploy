<script setup lang="ts">
const route = useRoute();
const brand = useFetch(`/api/bikes/${route.params.slug}`);
</script>

<template>
  <div>
    <div v-if="brand.status.value === 'success'">
      <div v-if="brand.data.value">
        <pre>{{ brand.data.value }}</pre>
      </div>

      <div v-else>
        <p>No Brands found.</p>
      </div>
    </div>

    <div v-else-if="brand.status.value === 'error'">
      <p>Error fetching brand data.</p>
    </div>

    <div v-else>
      <p>Loading brands...</p>
    </div>
  </div>
</template>
