// fitness trackers routes
import { createRouter, createWebHistory } from "vue-router";
import CalorieCalculator from '../pages/fitness-trackers/CalorieCalculator.vue';

//routes
const routes = [
  
   
      {
        path: "/calorie-calculator",
        component: CalorieCalculator,
        name: "calorieCalculator"  },
];

export const trackersRoutes = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
