<!-- this component is for calculating the  basal metabolic rate of the human body , it contains input fields and formula -->
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
    <div style="margin-left: 5%">
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
    <div class="mt-5" style="margin-left: 50px; width: 148px">
      <v-select
        class="knob"
        label="Gender"
        v-model="gender"
        :items="['Male', 'Female']"
        variant="outlined"
      ></v-select>
    </div>
    <!-- button to make calculation -->
    <div class="text-center mt-5 knob" style="margin-left: 5%">
      <v-btn :loading="loading" @click="calculateCalories">
        Calculate Your BMR
        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
      <div v-if="caloriesResult !== null" class="calories-result mt-5">
        Your BMR is: {{ caloriesResult.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script>
// imported knob for the rounded slider of input fields
import Knob from "primevue/knob";

export default {
  name: "CalorieCalculator",
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
      caloriesResult: null,
      activityFactor: 1.2,
    };
  },
  methods: {
    // formula to calculate BMR
    calculateCalories() {
      this.caloriesResult = null;
      this.loading = true;
      setTimeout(() => {
        let bmr;
        if (this.gender === "Male") {
          bmr =
            88.362 +
            13.397 * this.weight +
            4.799 * this.height -
            5.677 * this.age;
        } else {
          bmr =
            447.593 +
            9.247 * this.weight +
            3.098 * this.height -
            4.33 * this.age;
        }
        const activityFactor = this.activityFactor;
        const totalCalories = bmr * activityFactor;
        this.caloriesResult = totalCalories;
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
