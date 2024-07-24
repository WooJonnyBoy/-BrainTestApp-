<script setup>
</script>

<template>
  <section>
    <div class="section_two">
      <div class="section_text">
        <p>
          Профессиональный IQ-тест позволяет не только определить коэффициент
          вашего интеллекта,
        </p>
        <p>
          но и выработать список рекомендаций для повышения этого показателя.
        </p>
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

.section_text::before,
.section_text::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
}

.section_text::before {
  top: 2rem;
  left: 1.5rem;
  background: url(../assets/img/“.png) no-repeat;
  background-size: 100%;
}

.section_text::after {
  bottom: 3rem;
  right: 2rem;
  background: url(../assets/img/quot.png) no-repeat;
  background-size: 100%;
}
</style>