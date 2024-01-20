<script setup lang="ts">
import type { User } from "~/types/user";

const { data: users } = await useFetch<Array<User>>(
  "https://jsonplaceholder.typicode.com/users"
);
</script>
<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}, {{ user.name }}
      </li>
    </ul>
  </div>
</template>
