// fitness trackers routes
import Cookies from "js-cookie";
import BmiCalculator from "../pages/fitness-trackers/BmiCalculator.vue";
import BmrCalculator from "../pages/fitness-trackers/BmrCalculator.vue";
import CalorieCalculator from "../pages/fitness-trackers/CalorieCalculator.vue";
import FatCalculator from "../pages/fitness-trackers/FatCalculator.vue";
import FitnessTrackers from "../pages/fitness-trackers/FitnessTrackers.vue";
import TdeeCalculator from "../pages/fitness-trackers/TdeeCalculator.vue";
import TrackerLandingPage from "../pages/fitness-trackers/TrackerLandingPage.vue";
import WaterCalculator from "../pages/fitness-trackers/WaterCalculator.vue";
import { createRouter, createWebHistory } from "vue-router";

//routes
const routes = [
  {
    path: "/fitnessTrackers",
    component: FitnessTrackers,
    children: [
      { path: "", component: TrackerLandingPage, name: "fitnessTrackers" },
      {
        path: "bmi-calculator",
        component: BmiCalculator,
        name: "bmiCalculator",
      },
      {
        path: "calorie-calculator",
        component: CalorieCalculator,
        name: "calorieCalculator",
      },
      {
        path: "bmr-calculator",
        component: BmrCalculator,
        name: "bmrCalculator",
      },
      {
        path: "water-calculator",
        component: WaterCalculator,
        name: "waterCalculator",
      },
      {
        path: "fat-calculator",
        component: FatCalculator,
        name: "fatCalculator",
      },
      {
        path: "tdee-calculator",
        component: TdeeCalculator,
        name: "tdeeCalculator",
      },
    ],
  },
];

export const trackersRoutes = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
