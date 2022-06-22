<script setup lang="ts">
import { message } from "ant-design-vue";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuestionsStore } from "../store/questions";

const questionStore = useQuestionsStore();
const router = useRouter();
const currentQuestionIdx = ref(0);
const currentGuess = ref(undefined);

onMounted(() => {
  if (questionStore.questions.length === 0) {
    router.push({ name: "Setup" });
  }
});

const currQuestion = computed(() => {
  const q = questionStore.questions[currentQuestionIdx.value];
  if (q) return q;
  return {
    correctAnswer: "",
    incorrectAnswers: [],
  };
});

const currQuestionAnswers = computed(() => {
  return [
    currQuestion.value.correctAnswer,
    ...currQuestion.value.incorrectAnswers,
  ].sort(() => {
    return 2 * Math.random() - 1;
  });
});

function submit() {
  questionStore.guessedAnswers.push(currentGuess.value as unknown as string);
  if (currentGuess.value === currQuestion.value.correctAnswer) {
    message.destroy();
    message.success("That was correct!", 5);
    questionStore.correctCount++;
  } else {
    message.destroy();
    message.error(
      `That was incorrect. The correct answer was: ${currQuestion.value.correctAnswer}`,
      8
    );
  }
  // increment question
  if (currentQuestionIdx.value + 1 >= questionStore.questions.length) {
    router.push({ name: "Results" });
  } else {
    currentQuestionIdx.value++;
    currentGuess.value = undefined;
  }
}
</script>

<template>
  <h1>Quiz!</h1>
  <h2>
    Question {{ currentQuestionIdx + 1 }} of
    {{ questionStore.questions.length }}
  </h2>
  <br />
  <div>
    <h3>{{ currQuestion.question }}</h3>
    <a-radio-group v-model:value="currentGuess">
      <a-radio
        v-for="ans in currQuestionAnswers"
        :key="ans"
        :value="ans"
        class="radio"
      >
        {{ ans }}
      </a-radio>
    </a-radio-group>
  </div>
  <br />
  <a-button type="primary" :disabled="!currentGuess" @click="submit"
    >Submit
  </a-button>
</template>

<style scoped>
.radio {
  display: flex;
}
</style>
