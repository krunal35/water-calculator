<!-- this component is for calculating the Total Daily Energy Expenditure of the human body , it contains input fields and formula -->
<template>
  <div>
    <!-- input fields with round slider -->
    <div class="d-flex flex-wrap justify-center">
      <div class="mb-4">
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
    </div>
    <div class="d-flex flex-wrap justify-center mt-5">
      <div class="mb-4" style="margin-right: 20px">
        <v-select
          class="knob"
          label="Gender"
          v-model="gender"
          :items="['Male', 'Female']"
          variant="outlined"
        ></v-select>
      </div>
      <div class="mb-4" style="margin-right: 20px">
        <v-select
          class="knob"
          label="Activity Level"
          v-model="activityFactor"
          :items="[1.2, 1.375, 1.55, 1.725, 1.9]"
          variant="outlined"
        ></v-select>
      </div>
      <div class="mb-4">
        <v-select
          class="knob"
          label="Goal Adjustment"
          v-model="goalAdjustment"
          :items="['Lose Weight', 'Maintain Weight', 'Gain Muscle']"
          variant="outlined"
        ></v-select>
      </div>
    </div>
    <!-- button to make calculation -->
    <div class="text-center knob">
      <v-btn :loading="loading" @click="calculateTDEE">
        Calculate Your TDEE
        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
      <!-- result of calculation -->
      <div v-if="tdeeResult !== null" class="calories-result mt-5">
        Your TDEE is: {{ tdeeResult.toFixed(2) }}
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
      tdeeResult: null,
      activityFactor: 1.2,
      goalAdjustment: "Maintain Weight",
    };
  },
  methods: {
    // formula to calculate TDEE
    calculateTDEE() {
      this.tdeeResult = null;
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
        const goalAdjustment = this.getGoalAdjustment(this.goalAdjustment);
        const tdee = bmr * activityFactor * goalAdjustment;
        this.tdeeResult = tdee;
        this.loading = false;
      }, 1000);
    },
    //this method is for setting the goal
    getGoalAdjustment(goal) {
      switch (goal) {
        case "Lose Weight":
          return 0.9;
        case "Maintain Weight":
          return 1;
        case "Gain Muscle":
          return 1.1;
        default:
          return 1;
      }
    },
  },
};
</script>

<style scoped>
.bold-label {
  font-weight: bold;
}
.calories-result {
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
