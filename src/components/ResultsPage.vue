<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useQuestionsStore } from "../store/questions";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

const questionStore = useQuestionsStore();
const router = useRouter();

const correctPercent = computed(() => {
  return Math.round(
    (questionStore.correctCount / questionStore.questions.length) * 100
  );
});

function tryAgain() {
  message.destroy();
  router.push({ name: "Setup" });
}

onMounted(() => {
  // make sure there are questions & results
  if (
    questionStore.questions.length === 0 ||
    questionStore.guessedAnswers.length === 0
  ) {
    router.push({ name: "Setup" });
  }
});
</script>

<template>
  <h1>Results</h1>
  <h2>{{ correctPercent }}%</h2>
  <br />
  <template v-for="(quest, idx) in questionStore.questions" :key="quest.id">
    <div>
      <h3>{{ quest.question }}</h3>
      <p>
        <check-circle-two-tone
          two-tone-color="#52c41a"
          v-if="quest.correctAnswer === questionStore.guessedAnswers[idx]"
        />
        <close-circle-two-tone two-tone-color="#eb2f96" v-else />
        {{ questionStore.guessedAnswers[idx] }}
      </p>
      <p v-if="quest.correctAnswer !== questionStore.guessedAnswers[idx]">
        Correct answer: <strong>{{ quest.correctAnswer }}</strong>
      </p>
    </div>
    <br />
  </template>
  <a-button type="primary" @click="tryAgain" style="margin-bottom: 64px">
    Try Again
  </a-button>
</template>
