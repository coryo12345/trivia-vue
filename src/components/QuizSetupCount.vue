<script setup lang="ts">
import { useQuestionCountStore } from "../store/questionCount";

const questionCountStore = useQuestionCountStore();
</script>

<template>
  <div class="flex">
    <span class="mr-2">Number of Questions</span>
    <span class="mr-2">({{ questionCountStore.count }})</span>
    <a-slider
      v-model:value="questionCountStore.count"
      :min="1"
      :max="20"
    ></a-slider>
  </div>
</template>

<style scoped>
.ant-slider {
  width: 15rem;
}

.flex {
  display: flex;
  justify-content: center;
}
</style>
