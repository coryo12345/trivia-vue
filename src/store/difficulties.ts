import { defineStore } from "pinia";
import constants from "../constants";

function getDefaultState() {
  return {
    difficulties: {
      Easy: ["easy"],
      Medium: ["medium"],
      Hard: ["hard"],
      [constants.allDifficulties]: [""],
    },
    selectedDifficulty: constants.allDifficulties,
  };
}

export const useDifficultiesStore = defineStore("difficulties", {
  state: getDefaultState,
});
