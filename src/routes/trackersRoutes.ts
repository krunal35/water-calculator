// fitness trackers routes
import BmrCalculator from "@/pages/fitness-trackers/BmrCalculator.vue";
import { createRouter, createWebHistory } from "vue-router";

//routes
const routes = [
  
   
      {
        path: "/bmr-calculator",
        component: BmrCalculator,
        name: "bmrCalculator"  },
];

export const trackersRoutes = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
