<script setup lang="ts">
const counterStore = useCounterState();
const { counter } = counterStore;
</script>

<template>
  <div>
    <h1>Counter</h1>
    {{ counter }}
    <div>
      <button @click="counterStore.countUp">+</button>
      <button @click="counterStore.countDown">-</button>
      <button @click="counterStore.reset">reset</button>
    </div>
  </div>
</template>

<style scoped></style>
