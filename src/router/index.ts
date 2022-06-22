import { createWebHistory, createRouter } from "vue-router";
import QuizSetup from "../components/QuizSetup.vue";
import QuizPage from "../components/QuizPage.vue";
import ResultsPage from "../components/ResultsPage.vue";

const routes = [
  {
    path: "/",
    name: "Setup",
    component: QuizSetup,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: QuizPage,
  },
  {
    path: "/results",
    name: "Results",
    component: ResultsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
