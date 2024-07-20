<!-- BMI calculator page (parent) -->
<template>
  <!-- header of the page -->
  <TrackerHeader title="BMI CALCULATOR" />
  <div class="container mt-5">
    <h2 class="u-h2">WHAT IS BMI?</h2>
    <p>
      <span style="font-weight: 400"
        >Body Mass Index (BMI) is a widely used metric for assessing whether an
        individual's weight is within a healthy range for their height. It is a
        straightforward and useful tool that provides a general idea of whether
        you are underweight, normal weight, overweight, or obese based on your
        weight and height.<br /><br
      /></span>
    </p>
    <h2 class="u-h2">CALCULATE YOUR BMI</h2>
    <h6>set your weight and height</h6>
    <!-- calculator component -->
    <BmiCalculation />
    <h2 class="mt-3">BMI RANGES</h2>
    <h6 class="range-description" style="font-size: medium">
      A healthy BMI is in the 18.5 to 24.9 range for the majority of adults.
      This is definitely the case in individuals with a normal musculature.
    </h6>
    <ul class="bmi-list">
      <li>below 18.5: underweight</li>
      <li>between 18.5 and 24.9: healthy weight</li>
      <li>between 25 and 29.9: overweight</li>
      <li>between 30 and 39.9: obese</li>
      <li>over 40: severely obese</li>
    </ul>
    <BmiSignificance />
  </div>
</template>

<script>
import BmiCalculation from "@/components/fitnessTracker/BmiCalculation.vue";
import BmiSignificance from "@/components/fitnessTracker/calculator-info/BmiInfo.vue";
import TrackerHeader from "@/components/fitnessTracker/TrackerHeader.vue";
export default {
  components: {
    BmiCalculation,
    BmiSignificance,
    TrackerHeader,
  },
};
</script>

<style scoped>
.range-description {
  font-size: medium;
}

.bmi-list {
  list-style-type: disc;
  margin-left: 20px;
}
</style>
