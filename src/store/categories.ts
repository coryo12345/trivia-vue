import { defineStore } from "pinia";
import constants from "../constants";

function getDefaultState() {
  return {
    categories: {} as Record<string, any>,
    selectedCategory: constants.allCategories,
  };
}

export const useCategoriesStore = defineStore("categories", {
  state: getDefaultState,
  actions: {
    async getCategories() {
      if (Object.keys(this.categories).length === 0) {
        const categories = await (
          await fetch("https://the-trivia-api.com/api/categories", {
            mode: "cors",
          })
        ).json();
        categories[constants.allCategories] = [""];
        this.categories = categories;
      }
      return this.categories;
    },
  },
});
