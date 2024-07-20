// fitness trackers routes
import BmiCalculator from "../pages/fitness-trackers/BmiCalculator.vue";
import { createRouter, createWebHistory } from "vue-router";

//routes
const routes = [
  
   
      {
        path: "bmi-calculator",
        component: BmiCalculator,
        name: "bmiCalculator"  },
];

export const trackersRoutes = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
