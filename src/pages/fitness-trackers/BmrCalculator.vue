<!-- BMR calculator page (parent) -->
<template>
  <!-- header of the page -->
  <TrackerHeader title="BMR CALCULATOR" />
  <div class="container mt-5">
    <h2 class="u-h2">WHAT IS BMR?</h2>
    <p>
      <span style="font-weight: 400"
        >BMR, or Basal Metabolic Rate, represents the number of calories your
        body needs to perform basic functions while at rest. These functions
        include -
        <ul>
          <li>breathing</li>
          <li>circulating blood</li>
          <li>maintaining body temperature</li>
          <li>metabolism</li>
          <li>cell function, growth, and repair</li>
        </ul>
        <br /><br
      /></span>
    </p>
    <h2 class="u-h2">CALCULATE YOUR BMR</h2>
    <h6>set your weight, height & age</h6>
    <!-- calculator component -->
    <BmrCalculation />
    <BmrInfo />
  </div>
</template>

<script>
import TrackerHeader from "@/components/fitnessTracker/TrackerHeader.vue";
import BmrCalculation from "@/components/fitnessTracker/BmrCalculation.vue";
import BmrInfo from "@/components/fitnessTracker/calculator-info/BmrInfo.vue";

export default {
  components: {
    TrackerHeader,
    BmrCalculation,
    BmrInfo,
  },
};
</script>

<style></style>
