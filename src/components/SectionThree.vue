<script setup>

</script>

<template>
    <div class="sectionThree">
        <div class="text">
          <p>Также по результатам теста</p>
          <p><strong>ВЫ ПОЛУЧИТЕ</strong> подробные советы по определению наиболее перспективной <strong>ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ,</strong> </p>
          <p>которая принесет вам скорейший финансовый результат.
          </p>
        </div>
        <img class="img" src="../assets/img/brain.png" alt="">
        <button class="test">ПОЙТИ ТЕСТ</button>
      </div>
</template>

<style scoped>
.sectionThree {
  padding: 4rem 1rem 1rem 1rem;
  background-color: #fff;
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  font-size: 1.4rem;
}

.img {
  margin-top: 2rem;
  width: 80%;
  display: flex;
  background-position: center center;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.test {
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
</style>