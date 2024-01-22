<script setup lang="ts">
const tasks = useCookie<Array<string>>("tasks", {
  default: () => [],
});

/**
 * Add a new task
 */
const newTask = ref("");
const addTask = () => {
  if (newTask.value.length >= 1) {
    tasks.value.push(newTask.value);
  }
  newTask.value = "";
};

/**
 * Delete a task
 * @param index - index of task to delete
 */
const deleteTask = (index: number) => {
  tasks.value.splice(index, 1);
};

/**
 * Clear all tasks
 */
const clearTasks = () => {
  tasks.value = [];
};
</script>

<template>
  <NuxtLayout>
    <div>
      <form @submit.prevent="addTask">
        <input v-model="newTask" name="newTask" autocomplete="off" />
        <button>Add</button>
      </form>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <span>{{ task }}</span>
          <button @click="() => deleteTask(index)">Delete</button>
        </li>
      </ul>
      <button @click="clearTasks">Clear</button>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
