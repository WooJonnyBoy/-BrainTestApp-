<script setup>
</script>

<template>
  <section>
    <div class="section_two">
      <div class="section_text">
        <div class="text_first">
          Профессиональный IQ-тест позволяет не только определить коэффициент
          вашего интеллекта,
        </div>
        <div class="text_second">
          но и выработать список рекомендаций для повышения этого показателя.
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section_two {
  position: relative;
  width: 100%;
  min-width: 300px;
  height: 50dvh;
  display: flex;
  align-items: center;
  background: url(../assets/img/image.png) no-repeat;
  background-position: center center;
  background-size: cover;
}

.section_text {
  position: relative;
  padding: 2rem;
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: "Yeseva One", serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 1.3rem;
  background: url(../assets/img/Rect.png) no-repeat;
  background-position: center center;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-wrap: balance;
}

.text_first, .text_second {
  position: relative;
}

.text_first::before, .text_second::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
}

.text_first::before {
  top: -2rem;
  left: 0;
  background: url(../assets/img/“.png) no-repeat;
  background-size: 100%;
}

.text_second::after {
  bottom: -2rem;
  right: 0;
  background: url(../assets/img/quot.png) no-repeat;
  background-size: 100%;
}
</style>