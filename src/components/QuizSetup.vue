<script setup lang="ts">
import QuizSetupCategories from "./QuizSetupCategories.vue";
import QuizSetupDifficulties from "./QuizSetupDifficulties.vue";
import QuizSetupCount from "./QuizSetupCount.vue";
import { useQuestionsStore } from "../store/questions";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

const questionStore = useQuestionsStore();
const loading = ref(false);
const router = useRouter();

async function startQuiz() {
  loading.value = true;
  // fetch questions
  try {
    await questionStore.fetchQuestions();
  } catch (err) {
    message.error("Something went wrong...", 8);
    loading.value = false;
    return;
  }
  // go to quiz
  router.push({ name: "Quiz" });
}
</script>

<template>
  <template v-if="!loading">
    <h1>Prepare Your Quiz</h1>
    <QuizSetupDifficulties />
    <br />
    <QuizSetupCategories />
    <br />
    <QuizSetupCount />
    <br />
    <a-button type="primary" @click="startQuiz">Start Quiz</a-button>
  </template>
  <template v-else>
    <a-spin tip="Loading..." />
  </template>
</template>
