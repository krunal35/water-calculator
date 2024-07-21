// fitness trackers routes
import { createRouter, createWebHistory } from "vue-router";
import TdeeCalculator from '../pages/fitness-trackers/TdeeCalculator.vue'

//routes
const routes = [
  
   
      {
        path: "/tdee-calculator",
        component: TdeeCalculator,
        name: "tdeeCalculator"  },
];

export const trackersRoutes = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
