<!-- this component is for calculating the body-mass-index of the human body , it contains input fields and formula -->
<template>
  <div class="d-flex flex-wrap justify-center">
    <div>
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
      <label class="bold-label">Weight: {{ weight }} kg</label>
    </div>
    <div style="margin-left: 5%">
      <Knob
        v-model="height"
        :size="200"
        rangeColor="SlateGray"
        valueColor="green"
        :max="210"
        :min="140"
        :step="1"
        aria-label="height"
        id="height"
        class="knob"
      />
      <label class="bold-label">Height: {{ height }} cm</label>
    </div>
    <!-- button to make calculation -->
    <div class="text-center mt-5 knob" style="margin-left: 5%">
      <v-btn :loading="loading" @click="calculateBMI">
        Calculate Your BMI
        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
      <!-- result of calculation -->
      <div v-if="bmiResult !== null" class="bmi-result">
        Your BMI is: {{ bmiResult.toFixed(2) }}
        <div style="width: 210px">
          <p v-if="bmiResult < 18.5">You are underweight.</p>
          <p v-else-if="bmiResult < 25">You have a healthy weight.</p>
          <p v-else-if="bmiResult < 30">You are overweight.</p>
          <p v-else-if="bmiResult < 40">You are obese.</p>
          <p v-else>You are severely obese.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// imported knob for the rounded slider of input fields
import Knob from "primevue/knob";

export default {
  name: "KnobDemo",
  components: {
    Knob,
  },
  data() {
    return {
      weight: 50,
      height: 150,
      loading: false,
      bmiResult: null,
    };
  },
  methods: {
    // formula to calculate BMI
    calculateBMI() {
      this.loading = true;
      setTimeout(() => {
        const heightMeters = this.height / 100;
        const bmi = this.weight / (heightMeters * heightMeters);
        this.bmiResult = bmi;
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.bold-label {
  font-weight: bold;
  margin-left: 45px;
}
.bmi-result {
  font-weight: bold;
  margin-top: 20px;
}
.knob {
  transition: stroke-dashoffset 0.3s ease, transform 0.3s ease;
}

.knob:hover {
  transform: scale(1.06);
}
</style>
