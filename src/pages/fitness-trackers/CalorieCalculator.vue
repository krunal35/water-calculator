<!-- calorie calculator page (parent) -->
<template>
  <!-- header of the page -->
  <TrackerHeader title="CALORIE CALCULATOR" />
  <div class="container mt-5">
    <h2 class="u-h2">WHAT IS CALORIE?</h2>
    <p>
      <span style="font-weight: 400"
        >The calorie is a unit of energy from the caloric theory of heat. The
        large calorie, also called the food calorie, is the heat needed to raise
        the temperature of one liter of water by one degree Celsius. In
        comparison, the small calorie is the heat needed for the same
        temperature increase in one milliliter of water. 1 large calorie equals
        1000 small calories. <br /><br
      /></span>
    </p>
    <h2 class="u-h2">CALCULATE YOUR CALORIE</h2>
    <h6>set your weight, height & age</h6>
    <!-- calculator component -->
    <CalorieCalculation />
    <CalorieInfo />
  </div>
</template>

<script>
import TrackerHeader from "@/components/fitnessTracker/TrackerHeader.vue";
import CalorieCalculation from "@/components/fitnessTracker/CalorieCalculation.vue";
import CalorieInfo from "@/components/fitnessTracker/calculator-info/CalorieInfo.vue";
export default {
  components: {
    TrackerHeader,
    CalorieCalculation,
    CalorieInfo,
  },
};
</script>

<style></style>
