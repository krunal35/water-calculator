<!-- this component is for displaying the title of the calculator  -->
<template>
  <div class="header">{{ title }}</div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  padding: 5vw 2vw;
  background-color: #022a3a;
  color: white;
  font-size: 10vw;
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.05em;
  font-weight: bold;
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 600px) {
  .header {
    font-size: 8vw;
  }
}

@media (min-width: 900px) {
  .header {
    font-size: 6vw;
  }
}

@media (min-width: 1200px) {
  .header {
    font-size: 4vw;
  }
}
</style>
