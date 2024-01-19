<script setup lang="ts">
import type { RouteLocationNormalized } from "vue-router";

definePageMeta({
  validate: async (route: RouteLocationNormalized) => {
    return /^\d+$/.test(route.params.id as string);
  },
});
</script>

<template>
  <div>
    <h1>users/{{ $route.params.id }}を表示中</h1>
  </div>
</template>

<style scoped></style>
