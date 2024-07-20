<!-- this component is for displaying the cards of different calculators for redirect to different calculators page -->
<template>
  <div class="d-flex flex-wrap justify-center mt-5">
    <v-card
      v-for="(item, index) in tracker"
      :key="index"
      class="mx-auto d-flex flex-wrap image-hover-effect"
      max-width="400"
      style="margin: 10px; cursor: pointer"
      @click="handleCardClick(item)"
    >
      <v-img
        class="align-end text-white"
        height="250"
        width="400"
        :src="item.image"
        alt="fitness calculator image"
        cover
      ></v-img>
      <v-card-text class="text-center font-weight-bold" style="font-size: 25px">
        {{ item.title }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tracker: [
        {
          title: "BMI CALCULATOR",
          image: require("../../assets/img/fitnessTrackers/bmi2.webp"),
        },
        {
          title: "CALORIE CALCULATOR",
          image: require("../../assets/img/fitnessTrackers/food-journal.webp"), // Using require to correctly resolve the image path
        },
        {
          title: "BMR CALCULATOR",
          image: require("../../assets/img/fitnessTrackers/bmr-calculator.webp"),
        },
        {
          title: "WATER INTAKE CALCULATOR",
          image: require("../../assets/img/fitnessTrackers/woman-drinking-water.webp"),
        },
        {
          title: "BODY FAT CALCULATOR",
          image: require("../../assets/img/fitnessTrackers/body-fat-calculator.webp"),
        },
        {
          title: "TDEE CALCULATOR",
          image: require("../../assets/img/fitnessTrackers/tdee-calculator.webp"),
        },
      ],
    };
  },
  methods: {
    // method for handling the different calculator card click
    handleCardClick(item) {
      const routeMapping = {
        "BMI CALCULATOR": "bmiCalculator",
        "CALORIE CALCULATOR": "calorieCalculator",
        "BMR CALCULATOR": "bmrCalculator",
        "WATER INTAKE CALCULATOR": "waterCalculator",
        "BODY FAT CALCULATOR": "fatCalculator",
        "TDEE CALCULATOR": "tdeeCalculator",
      };

      // Get the route name based on the item title
      const routeName = routeMapping[item.title];

      // Check if the route name exists in the mapping
      if (routeName) {
        this.$router.push({ name: routeName });
      } else {
        console.error(`No route found for item title: ${item.title}`);
      }
    },
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center;
}
.image-hover-effect:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.image-hover-effect {
  cursor: pointer;
}
</style>
