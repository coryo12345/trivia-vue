<script setup lang="ts">
import { useQuestionCountStore } from "../store/questionCount";

const questionCountStore = useQuestionCountStore();
</script>

<template>
  <div class="flex">
    <span style="margin-right: 1rem">Number of Questions</span>
    <a-slider
      v-model:value="questionCountStore.count"
      :min="1"
      :max="20"
    ></a-slider>
  </div>
</template>

<style scoped>
.ant-slider {
  width: 20rem;
}

.flex {
  display: flex;
  justify-content: center;
}
</style>
