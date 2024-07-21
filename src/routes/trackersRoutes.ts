// fitness trackers routes
import { createRouter, createWebHistory } from "vue-router";
import WaterCalculator from '../pages/fitness-trackers/WaterCalculator.vue'

//routes
const routes = [
  
   
      {
        path: "/water-calculator",
        component: WaterCalculator,
        name: "waterCalculator"  },
];

export const trackersRoutes = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
