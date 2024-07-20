<!-- this component is for calculating the water level need of the human body , it contains input fields and formula -->
<template>
  <div class="d-flex flex-wrap justify-center">
    <div class="mb-5">
      <!-- input fields with round slider -->
      <Knob
        v-model="weight"
        :size="200"
        rangeColor="SlateGray"
        valueColor="green"
        :max="200"
        :min="20"
        :step="1"
        aria-label="Weight"
        id="weight"
        class="knob"
      />
      <label class="bold-label ml-5">Weight: {{ weight }} kg</label>
    </div>
    <div class="mb-4" style="margin-left: 40px; width: 100px">
      <v-select
        class="knob"
        label="Activity Factor"
        v-model="activityFactor"
        :items="[1.2, 1.375, 1.55, 1.725, 1.9]"
        variant="outlined"
      ></v-select>
    </div>
    <div class="mb-4" style="margin-left: 40px; width: 100px">
      <v-select
        class="knob"
        label="Climate Factor"
        v-model="climateFactor"
        :items="[1.0, 1.1, 1.2, 1.3, 1.4, 1.5]"
        variant="outlined"
      ></v-select>
    </div>
    <div class="mb-4" style="margin-left: 40px">
      <v-text-field
        class="knob"
        v-model="temperature"
        label="Temperature "
        type="number"
        suffix="°C"
        outlined
      ></v-text-field>
    </div>
    <div class="text-center ml-5 mt-2 knob">
      <v-btn :loading="loading" @click="calculateWaterIntake">
        Calculate Water Intake
        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
    </div>
    <!-- result of calculation -->
    <div v-if="waterIntakeResult !== null" class="water-intake-result">
      Your Estimated Daily Water Intake :
      {{ waterIntakeResult.toFixed(2) }} ml
    </div>
  </div>
</template>

<script>
// imported knob for the rounded slider of input fields
import Knob from "primevue/knob";

export default {
  name: "WaterIntakeCalculator",
  components: {
    Knob,
  },
  data() {
    return {
      weight: 50,
      loading: false,
      waterIntakeResult: null,
      activityFactor: 1.2,
      climateFactor: 1.0,
      temperature: 25,
    };
  },
  methods: {
    // formula to calculate Water level
    calculateWaterIntake() {
      this.waterIntakeResult = null;
      this.loading = true;
      setTimeout(() => {
        let baselineWaterIntake = this.weight * 35;
        const activityFactor = this.activityFactor;
        const adjustedWaterIntake = baselineWaterIntake * activityFactor;
        const climateFactor = this.climateFactor;
        const temperature = this.temperature;
        const temperatureAdjustment =
          this.getTemperatureAdjustment(temperature);
        const totalWaterIntake =
          adjustedWaterIntake * climateFactor + temperatureAdjustment;
        this.waterIntakeResult = totalWaterIntake;
        this.loading = false;
      }, 1000);
    },
    getTemperatureAdjustment(temperature) {
      return 1.2 * (temperature - 25);
    },
  },
};
</script>

<style scoped>
.bold-label {
  font-weight: bold;
}
.knob {
  transition: stroke-dashoffset 0.3s ease, transform 0.3s ease;
}

.knob:hover {
  transform: scale(1.06);
}
</style>
