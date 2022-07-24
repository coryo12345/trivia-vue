<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useCategoriesStore } from "../store/categories";

const categoriesStore = useCategoriesStore();

const loading = ref(true);

onMounted(() => {
  Promise.all([categoriesStore.getCategories()]).then((vals) => {
    loading.value = false;
  });
});
</script>

<template>
  <div class="flex">
    <span class="mr-2">Category</span>
    <a-select
      placeholder="Select a Category"
      v-model:value="categoriesStore.selectedCategory"
    >
      <a-select-option
        v-for="(values, name) in categoriesStore.categories"
        :key="name"
      >
        {{ name }}
      </a-select-option>
    </a-select>
  </div>
</template>

<style scoped>
.ant-select {
  min-width: 10rem;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
