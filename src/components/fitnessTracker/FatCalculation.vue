<template>
  <div class="d-flex flex-wrap justify-center">
    <div class="mb-4">
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
    <div class="mb-4" style="margin-left: 40px">
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
    <div class="mb-4" style="margin-left: 40px">
      <Knob
        v-model="age"
        :size="200"
        rangeColor="SlateGray"
        valueColor="green"
        :max="120"
        :min="12"
        :step="1"
        aria-label="age"
        id="age"
        class="knob"
      />
      <label class="bold-label">Age: {{ age }} year</label>
    </div>
    <div class="mb-4" style="margin-left: 40px">
      <v-select
        class="knob"
        label="Gender"
        v-model="gender"
        :items="['Male', 'Female']"
        variant="outlined"
      ></v-select>
    </div>

    <div class="text-center mt-4 knob" style="margin-left: 3%">
      <v-btn :loading="loading" @click="calculateFat">
        Calculate Body Fat
        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
      <!-- result of calculation -->
      <div v-if="fatResult !== null" class="calories-result mt-5">
        Your Body Fat Percentage: {{ fatResult.toFixed(2) }}%
      </div>
    </div>
  </div>
</template>

<script>
// imported knob for the rounded slider of input fields
import Knob from "primevue/knob";

export default {
  name: "FatCalculator",
  components: {
    Knob,
  },
  data() {
    return {
      weight: 50,
      height: 150,
      age: 12,
      gender: "Male",
      loading: false,
      fatResult: null,
    };
  },
  methods: {
    // formula to calculate Body Fat Percentage
    calculateFat() {
      this.fatResult = null;
      this.loading = true;
      setTimeout(() => {
        this.fatResult = this.calculateBodyFatPercentage();
        this.loading = false;
      }, 1000);
    },
    calculateBodyFatPercentage() {
      const weight = this.weight;
      const height = this.height;
      const bmi = weight / ((height / 100) * (height / 100));
      const age = this.age;
      const gender = this.gender === "Male" ? 1 : 0;
      const bodyFatPercentage = 1.2 * bmi + 0.23 * age - 10.8 * gender - 5.4;
      return bodyFatPercentage;
    },
  },
};
</script>

<style scoped>
.bold-label {
  font-weight: bold;
  margin-left: 45px;
}
.calorie-result {
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
