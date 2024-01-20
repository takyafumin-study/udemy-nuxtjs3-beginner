<script setup lang="ts">
const error = useError();
console.log(error);
</script>

<template>
  <div v-if="error.statusCode === 404">
    <h1>Error!</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<style scoped></style>
