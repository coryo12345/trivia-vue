import { defineStore } from "pinia";
import constants from "../constants";
import { useCategoriesStore } from "./categories";
import { useDifficultiesStore } from "./difficulties";
import { useQuestionCountStore } from "./questionCount";

function getDefaultState() {
  return {
    questions: [] as any[],
    guessedAnswers: [] as string[],
    correctCount: 0,
  };
}

export const useQuestionsStore = defineStore("questions", {
  state: getDefaultState,
  actions: {
    async fetchQuestions() {
      const difficultyStore = useDifficultiesStore();
      const categoriesStore = useCategoriesStore();
      const questionCountStore = useQuestionCountStore();

      // build request url
      const url = buildRequest(
        difficultyStore.selectedDifficulty,
        categoriesStore.selectedCategory,
        questionCountStore.count
      );
      // fetch questions
      this.questions = await (await fetch(url, { mode: "cors" })).json();
      this.guessedAnswers = [];
      this.correctCount = 0;
    },
  },
});

function buildRequest(
  difficulty: string,
  category: string,
  count: number
): string {
  const base = "https://the-trivia-api.com/api/questions";
  const config: string[] = [];

  if (difficulty !== constants.allDifficulties) {
    const difficultyStore = useDifficultiesStore();
    config.push(`difficulty=${difficultyStore.difficulties[difficulty][0]}`);
  }

  if (category !== constants.allCategories) {
    const categoriesStore = useCategoriesStore();
    config.push(`categories=${categoriesStore.categories[category][0]}`);
  }

  config.push(`limit=${count}`);

  return `${base}?${config.join("&")}`;
}
