import { defineStore } from "pinia";

export const useQuestionCountStore = defineStore("questionCount", {
  state: () => {
    return {
      count: 5,
    };
  },
});
