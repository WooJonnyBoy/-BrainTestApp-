<script setup>
</script>

<template>
  <section>
    <div class="section">
      <div class="top_block">
        <p>Пройдите точный и быстрый</p>
        <h1>ТЕСЕ НА ОПРЕДЕЛЕНИЕ IQ</h1>
      </div>
      <div class="bottom_block">
        <button class="test" @click="$emit('openTest', '')">ПРОЙТИ ТЕСТ</button>
        <p>и получите рекомендации</p>
        <p>по развитию своего интеллекта</p>
        <p>и улучшению финансового благосостояния и личной жизни</p>
        <button class="arrow" ></button>
        <p>Прдробнее</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  position: relative;
  margin: 0 auto;
  height: calc(100dvh - 46px);
  width: 100%;
  min-height: 550px;
  aspect-ratio: 9/23;
  padding: 1rem 2rem;
  display: flex;
  gap: 2dvh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url(../assets/img/rain_bk.png);
  background-size: 60dvh auto;
  background-position: center 20%;
}

.top_block {
  width: 100%;
  font-size: 1.5rem;
  & p {
    text-align: center;
    color: white;
  }
  & h1 {
    margin-top: 1rem;
    color: var(--text-yellow);
    font-size: 30px;
    text-align: center;
    text-wrap: balance;
    font-size: 2.5rem;
  }
}

.bottom_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  color: white;
  text-wrap: pretty;
  & :nth-child(2),
  :nth-child(3) {
    color: var(--text-yellow);
  }
  & p {
    text-align: center;
  }
  & :nth-child(6) {
    font-size: 0.8rem;
  }
  & .test {
    margin-bottom: 1.5rem;
    padding: 1rem 3rem;
    background-color: var(--text-yellow);
    border-radius: 50px;
    font-family: "Merriweather", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.2rem;
    color: black;
    border: none;
  }
}

.arrow {
  margin-top: 0.8rem;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: #fff;
  font-size: 1.4rem;
  background: url(../assets/img/arrow.png) no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  background-color: #fff;
}

@media (width < 360px) {
  .top_block {
    font-size: 1.2rem;
    & h1 {
      font-size: 2rem;
    }
  }
  .bottom_block {
    font-size: 1.2rem;
    & .test {
      margin-bottom: 0;
      font-size: 1rem;
    }
  }
  .arrow {
    margin: 0;
  }
}

</style>
