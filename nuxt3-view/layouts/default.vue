<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
    <footer>&copy; takyafumin</footer>
  </div>
</template>

<style scoped>
.container {
  color: red;
}

footer {
  background-color: orange;
  color: white;
  text-align: center;
}
</style>
