<!-- this component contains the information of thr fat calculator with formula used in calculator -->
<template>
  <div class="mt-5">
    <h2>UNDERSTANDING BODY FAT:</h2>
    <p>
      Body fat, scientifically termed as "adipose tissue," plays several pivotal
      roles in our body. Its main function is to store lipids, which the body
      utilizes for energy. Additionally, it releases vital hormones and offers
      cushioning and insulation to our body.
    </p>
    <h5>Body Fat Percentage=1.20×BMI+0.23×age−10.8×gender−5.4</h5>
    <p>
      BMI = Body Mass Index - BMI is a measure of body fat based on a person's
      weight and height. <br />
      Gender = Gender is represented as a binary variable: 1 for male and 0 for
      female. <br />
      1.20 = This coefficient is applied to the BMI value. It indicates the
      contribution of BMI to the overall body fat percentage calculation. A
      higher BMI generally corresponds to a higher body fat percentage. <br />
      0.23 = This coefficient is applied to the age. It represents the
      contribution of age to the overall body fat percentage calculation.
      Generally, as age increases, body fat percentage tends to increase
      slightly due to changes in body composition and metabolism. <br />
      10.8 = This coefficient is applied to the gender variable. It represents
      the difference in body fat percentage between males and females. Since
      it's subtracted, it indicates that males generally have lower body fat
      percentages compared to females. <br />
      5.4 = This is a constant term in the formula. It adjusts the overall
      result to align with typical body fat percentage values.
    </p>
    <h2 style="margin-top: 30px">THE HEALTH RISKS OF EXCESSIVE BODY FAT</h2>
    <p>
      According to the World Health Organization (WHO), obesity ranks as a top
      preventable cause of death globally, with an alarming 111,909 to 365,000
      annual fatalities in the U.S. alone. The Centers for Disease Control and
      Prevention highlight that a staggering 36.5% of U.S. adults fall under the
      obesity category, making it a pressing health concern.
    </p>
    <h2 style="margin-top: 30px">ESSENTIAL VS. STORAGE BODY FAT</h2>
    <p>
      Body fat can be categorized into essential and storage fat. Essential fat
      is crucial for life and reproductive processes. Men typically have 2-5% of
      this fat, while women have around 10-13%. For optimal health, men should
      aim for a body fat percentage of 8-19%, and women should target 21-33%.
      Dipping below these ranges can lead to health issues, and it's advisable
      to consult a healthcare professional. Storage fat, on the other hand,
      accumulates in adipose tissue. This can be subcutaneous (under the skin)
      or visceral (between organs). When we talk about body fat, we're often
      referring to storage fat. While a certain amount is beneficial, excessive
      storage of fat can be detrimental to health.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
