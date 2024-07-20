<!-- this component contains the information of thr calorie calculator with formula used in calculator -->
<template>
  <div class="mt-5">
    <h2>HOW TO CALCULATE MY CALORIES</h2>
    <p>
      The GymGenius Calorie Calculator utilizes different equations to provide
      estimated results. Originally, the Harris-Benedict Equation, an early BMR
      calculation method, was refined in 1984 for greater accuracy. The more
      recent Mifflin-St Jeor Equation has since surpassed it in precision. The
      Katch-McArdle Formula incorporates lean body mass for RDEE calculation,
      setting it apart from the other equations. While the Mifflin-St Jeor
      Equation is generally favored for BMR estimation, it may not be ideal for
      lean individuals who know their body fat percentage. The three equations
      employed are as follows:
    </p>
    <h5>Mifflin-St Jeor Equation</h5>
    <p>
      For men: BMR = 10W + 6.25H - 5A + 5 For <br />
      women: BMR = 10W + 6.25H - 5A - 161
    </p>

    <h5>Katch-McArdle Formula:</h5>
    <p>Men/Women BMR = 370 + (21.6 × Lean Body Mass kg)</p>
    <h5>Revised Harris-Benedict Equation</h5>
    <p>
      For men: BMR = 13.397W + 4.799H - 5.677A + 88.362 <br />
      For women: BMR = 9.247W + 3.098H - 4.330A + 447.593
    </p>
    <h5>W= weight in kilograms, H= height in centimetres, A= age in years</h5>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
