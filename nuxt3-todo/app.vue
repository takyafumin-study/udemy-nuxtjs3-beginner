<script setup lang="ts">
const tasks = useCookie<Array<string>>("tasks", {
  default: () => [],
});

const newTask = ref("");
const addTask = () => {
  if (newTask.value.length >= 1) {
    tasks.value.push(newTask.value);
  }
  newTask.value = "";
};
</script>

<template>
  <div>
    <h1>To DO</h1>
    <form @submit.prevent="addTask">
      <input v-model="newTask" name="newTask" autocomplete="off" />
      <button>Add</button>
    </form>
    <ul>
      <li v-for="task in tasks" :key="task">
        <span>{{ task }}</span>
        <button>Delete</button>
      </li>
    </ul>
    <button>Clear</button>
  </div>
</template>

<style scoped></style>
