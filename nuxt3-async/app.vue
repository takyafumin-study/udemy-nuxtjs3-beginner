<script setup lang="ts">
import type { User } from "~/types/user";

const { data: users, error } = await useFetch<Array<User>>(
  "https://jsonplaceholder.typicode.com/users"
);

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: "Page NotFound !!!!" });
}
</script>
<template>
  <div>
    <img src="~assets/cat.jpg" alt="cat" />

    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}, {{ user.name }}
      </li>
    </ul>
  </div>
</template>
