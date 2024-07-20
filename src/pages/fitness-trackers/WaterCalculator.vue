<!-- water calculator page (parent) -->
<template>
  <!-- header of the page -->
  <TrackerHeader title="WATER INTAKE CALCULATOR" />
  <div class="container mt-5">
    <h2 class="u-h2">WATER INTAKE CALCULATOR</h2>
    <P style="font-weight: 400"
      >It can be hard to know how much water to drink in any given day, when you
      should be drinking it, and how to judge when you need more or less</P
    >
    <h6>set your relative data</h6>
    <!-- calculator component -->
    <WaterCalculation />
    <WaterInfo />
  </div>
</template>

<script>
import TrackerHeader from "@/components/fitnessTracker/TrackerHeader";
import WaterCalculation from "@/components/fitnessTracker/WaterCalculation";
import WaterInfo from "@/components/fitnessTracker/calculator-info/WaterInfo";

export default {
  components: {
    TrackerHeader,
    WaterCalculation,
    WaterInfo,
  },
};
</script>

<style></style>
