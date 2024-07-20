<!-- trackers landing page -->
<template>
  <div>
    <!-- hero header poster -->
    <img
      width="100%"
      src="../../assets/img/fitnessTrackers/Fitness-Calculators.png"
      alt="poster"
    />
    <!-- card of all fitness calculators -->
    <FitnessCard />
    <router-view></router-view>
  </div>
</template>

<script>
import FitnessCard from "@/components/fitnessTracker/FitnessCard.vue";
export default {
  components: {
    FitnessCard,
  },
};
</script>

<style></style>
