<script setup lang="ts">
useHead({
  title: "Nuxt3 Store",
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap",
    },
  ],
});
</script>

<template>
  <div class="container">
    <slot />
    <footer>&copy; takyafumin</footer>
  </div>
</template>

<style scoped>
.container {
  color: red;
  font-family: "Permanent Marker", cursive;
}

footer {
  background-color: orange;
  color: white;
  text-align: center;
}
</style>
