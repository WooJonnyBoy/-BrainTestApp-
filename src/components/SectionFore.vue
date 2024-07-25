<script setup>
</script>

<template>
  <section>
    <div class="sectionFore">
      <div class="first_block">
        Прохождение теста займет у вас не более <span>12 минут</span>, а его
        результаты вы сможете <span>использовать всю жизнь.</span>
      </div>
      <div class="second_block">
        Профессиональная интерпретация и детально
        <strong>проработанные рекомендации</strong> позволят вам качественно
        <strong>изменить все аспекты своей жизни:</strong> от финансового до
        любовного.
      </div>
      <button class="test" @click="$emit('openTest', '')">ПОЙТИ ТЕСТ</button>
      <div class="year"></div>
    </div>
  </section>
</template>

<style scoped>
.sectionFore {
  position: relative;
  padding: 1rem;
  width: 100%;
  height: 100dvh;
  background: url(../assets/img/rain.png) no-repeat;
  background-size: cover;
  background-position: 0 auto;
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 1.3rem;
}

.sectionFore::before {
  content: "";
  position: absolute;
  width: 50dvw;
  height: 40dvh;
  background: url(../assets/img/lighleft.png) no-repeat;
  background-size: auto 40dvh;
  background-position: left center;
  bottom: 3rem;
  left: 0;
}

.sectionFore::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 40dvh;
  background: url(../assets/img/lightright.png) no-repeat;
  background-size: auto 40dvh;
  background-position: right center;
  top: 5rem;
  left: 0;
}

.first_block {
  padding: 0 4rem 0 0;
}

.first_block span {
  color: var(--text-yellow);
}

.second_block {
  width: 100%;
  background-color: #fff;
  font-size: 1.4rem;
  color: black;
  filter: opacity(80%);
  border-radius: 25px;
  padding: 2rem 1rem;
}

.test {
  position: relative;
  z-index: 20;
  width: fit-content;
  margin-bottom: 1.5rem;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.2rem;
  border: 1px solid white;
  background-color: transparent;
  color: white;
}

.year {
  position: absolute;
  width: 100px;
  height: 50px;   
  background: url(../assets/img/year.png) no-repeat;
  background-position: center;
  background-size: 60% auto; 
  bottom: 0;

}
</style>