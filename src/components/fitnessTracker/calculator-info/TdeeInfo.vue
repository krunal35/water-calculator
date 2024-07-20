<!-- this component contains the information of thr Total Daily Energy Expenditure calculator with formula used in calculator -->
<template>
  <div class="mt-5">
    <h2>HOW TO CALCULATE YOUR TDEE -</h2>
    <h4 class="mt-5">STEP 1: CALCULATE YOUR BMR</h4>
    <p>Your BMR can be calculated using the Mifflin-St Jeor Equation</p>

    <h4 class="mt-5">STEP 2: DETERMINE YOUR ACTIVITY LEVEL</h4>
    <p>
      As mentioned earlier, your activity level plays a significant role in your
      TDEE. Use the following categories to classify your activity level:
      Sedentary (little or no exercise) <br />Lightly active (light exercise or
      sports 1-3 days a week) <br />
      Moderately active (moderate exercise or sports 3-5 days a week)

      <br />Very active (hard exercise or sports 6-7 days a week)

      <br />Super active (very hard exercise, physical job, or training twice a
      day)
    </p>

    <h4 class="mt-5">STEP 3: APPLY ACTIVITY MULTIPLIER</h4>
    <p>
      Multiply your BMR by the activity level multiplier that corresponds to
      your activity level:

      <br />Sedentary: BMR * 1.2 <br />Lightly active: BMR * 1.375
      <br />Moderately active: BMR * 1.55 <br />Very active: BMR * 1.725
      <br />Super active: BMR * 1.9
    </p>

    <h4 class="mt-5">STEP 4: ACCOUNT FOR GOALS</h4>
    <p>
      TDEE calculator to lose weight: Subtract 10-20% from your TDEE. <br />TDEE
      calculator to maintain weight: Keep your TDEE as is. <br />TDEE calculator
      to gain weight (muscle): Add 10-20% to your TDEE.
    </p>

    <h4 class="mt-5">
      STEP 5: CALCULATE TOTAL DAILY ENERGY EXPENDITURE (TDEE)
    </h4>
    <p>
      Now, you have your TDEE, which represents the number of calories you need
      to consume daily to maintain your current weight. If you have specific
      weight loss or muscle gain goals, adjust your daily caloric intake
      accordingly.
    </p>

    <h2 class="mt-5">THE COMPONENTS OF TDEE -</h2>

    <h5 class="mt-5">1. BASAL METABOLIC RATE (BMR)</h5>
    <p>
      Your BMR is the number of calories your body needs to perform essential
      functions like breathing, circulation, and cell production while at rest.
      It's as if you were lying in bed all day without any physical activity.
      BMR is influenced by factors such as age, gender, weight, and height.
    </p>
    <h5 class="mt-5">2. PHYSICAL ACTIVITY</h5>
    <p>
      This component accounts for the calories burned during all types of
      physical activity, from walking and working out to household chores. Your
      activity level can be classified into various categories, ranging from
      sedentary (little to no exercise) to very active (intense exercise or a
      physically demanding job).
    </p>
    <h5 class="mt-5">3. THERMIC EFFECT OF FOOD (TEF)</h5>
    <p>
      TEF represents the energy expenditure required for digesting, absorbing,
      and metabolizing the food you eat. Different macronutrients
      (carbohydrates, proteins, and fats) have varying thermic effects.
    </p>
    <h5 class="mt-5">4. NON-EXERCISE ACTIVITY THERMOGENESIS (NEAT)</h5>
    <p>
      NEAT encompasses all the calories burned through activities that are not
      structured exercises, such as fidgeting, standing, or
      <span style="color: red">even typing on your computer.</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
