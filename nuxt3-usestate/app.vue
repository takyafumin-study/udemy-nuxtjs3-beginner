<script setup lang="ts">
const title = useState("title", () => "Hello World!");
</script>

<template>
  <div>
    <p>{{ title }}</p>
  </div>
</template>
