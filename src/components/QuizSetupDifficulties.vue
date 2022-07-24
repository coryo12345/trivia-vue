<script setup lang="ts">
import { useDifficultiesStore } from "../store/difficulties";

const difficultyStore = useDifficultiesStore();
</script>

<template>
  <div class="flex">
    <span class="mr-2">Difficulty</span>
    <a-select
      v-model:value="difficultyStore.selectedDifficulty"
      placeholder="Select a Difficulty"
    >
      <a-select-option
        v-for="(vals, name) in difficultyStore.difficulties"
        :key="name"
      >
        {{ name }}
      </a-select-option>
    </a-select>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
</style>
