<script setup lang="ts">
const users = await useFetch("/api/users");
</script>

<template>
  <div>
    <PageHeading title="Users" />

    <div v-if="users.status.value === 'success'">
      <div v-if="users.data.value">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in users.data.value"
              :key="user.id"
            >
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.createdAt }}</td>
            </tr>
          </tbody>
        </table>
        <p class="mx-4 my-2">Total users: {{ users.data.value.length }}</p>
      </div>

      <div v-else>
        <p>No users found.</p>
      </div>
    </div>

    <div v-else-if="users.status.value === 'error'">
      <p>Error fetching users.</p>
    </div>

    <div v-else>
      <p>Loading users...</p>
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
