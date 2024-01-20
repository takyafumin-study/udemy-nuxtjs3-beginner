<script setup lang="ts">
const count = ref<number>(0);

const increment = () => count.value++;
const decrement = () => {
  if (count.value <= 0) {
    return;
  }
  count.value--;
};
const reset = () => (count.value = 0);
</script>

<template>
  <div>
    <h1>Counter</h1>
    {{ count }}
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<style scoped></style>
