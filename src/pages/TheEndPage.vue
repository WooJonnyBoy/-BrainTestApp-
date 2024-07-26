<script setup>
import { store } from "../store/store.js";
</script>

<template>
  <div class="bg">
    <div class="theEndPage">
      <div class="header">ГОТОВО!</div>
      <div>Ваш результат рассчитан:</div>
      <div>
        <p>
          <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта
          более чем на
        </p>
        <p>15 пунктов отличается от среднего в большую или меньшую сторону!</p>
      </div>
      <div v-if="!store.userData">Скорее получите свой результат!</div>
      <div v-if="!store.userData">
        В целях защиты персональных данных результат теста, их подробная
        интерпретация и рекомендации доступны в виде голосового сообщения по
        звонку с вашего мобильного телефона
      </div>
      <div v-if="!store.userData">
        <p>Звоните скорее, запись доступна всего</p>
        <p class="timer">
          <span>{{ store.timer }}</span
          ><span> МИНУТ</span>
        </p>
      </div>
      <button @click="store.getData()">Позвонить и прослушать результат</button>
      <div v-if="store.isLoading">Loading...</div>
      <div v-if="store.loadError">Net error!!!</div>
      <div v-if="store.userData" class="userInfo">
        <p>Name: {{ store.userData.name }}</p>
        <p>Gender: {{ store.userData.gender }}</p>
        <p>Birth year: {{ store.userData.birth_year }}</p>
        <p>Hair color: {{ store.userData.hair_color }}</p>
        <p>Height: {{ store.userData.height }}</p>
        <p>Waight: {{ store.userData.mass }}</p>
      </div>
      <div></div>
      <div class="void"></div>
      <div class="footer">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
        FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: absolute;
  color: var(--text-yellow);
  top: -2.6rem;
  left: 50%;
  transform: translateX(-40%);
  font-size: 1.8rem;
}

.header::before {
  content: "";
  width: 2.7rem;
  aspect-ratio: 1;
  position: absolute;
  top: -2px;
  left: -4rem;
  background: url(../assets/img/brainonly.png) no-repeat;
  background-size: 100%;
  background-position: center center;
  z-index: 10;
}

.bg {
  position: relative;
  height: calc(100dvh - 30px);
  background: url(../assets/img/bgquestons.png);
  background-size: 100%;
}

.theEndPage {
  position: relative;
  margin: 0 auto;
  height: calc(100dvh - 46px);
  width: 100%;
  min-height: 550px;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: brightness(0.4);
  font-size: 1.1rem;
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  gap: 1rem;
}

.theEndPage::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30dvh;
  aspect-ratio: 1;
  background: url(../assets/img/lightning_left.png) no-repeat;
  background-position: left;
  background-size: 90% auto;
  z-index: 1;
}

.theEndPage::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30dvh;
  aspect-ratio: 2/3;
  background: url(../assets/img/lightning_right.png) no-repeat;
  background-position: right;
  background-size: 80% auto;
  z-index: 1;
}

.theEndPage div:nth-child(2) {
  text-transform: uppercase;
  text-align: center;
  font-family: "PT Serif", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.4rem;
}

.theEndPage div:nth-child(3) {
  text-align: center;
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.15rem;
}

.theEndPage div:nth-child(3) span {
  text-decoration: underline;
}

.theEndPage div:nth-child(4) {
  text-transform: uppercase;
  text-align: center;
  font-family: "PT Serif", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.5rem;
  color: #3bde7c;
  line-height: 1.8rem;
}

.theEndPage div:nth-child(5) {
  text-transform: uppercase;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: #1c2741;
  font-size: 0.7rem;
  line-height: 1.3rem;
  letter-spacing: 2px;
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 6px;
}

.theEndPage div:nth-child(6) {
  text-align: center;
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.1rem;
  color: #3bde7c;
  line-height: 1.8rem;
}

.theEndPage button {
  position: relative;
  background-color: #eb1b00;
  border-radius: 5px;
  padding: 1rem 2rem 1rem 5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: clamp(1.1rem, 4vw, 1.6rem);
  color: white;
  border: none;
  z-index: 100;
}

.theEndPage button::before {
  content: "";
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  background: url(../assets/img/phone.png) no-repeat;
  background-size: cover;
}

.footer {
  max-width: 400px;
  position: absolute;
  bottom: -10px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.55rem;
  letter-spacing: 3px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
}

.timer span:nth-child(1) {
  font-size: 1.6rem;
  padding-right: 1rem;
}

.timer span:nth-child(2) {
  font-size: 0.7rem;
}

.userInfo {
  padding: 1rem;
  color: white;
  border-radius: 5px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 30px 0 rgba(0, 0, 255, 0.428);
  font-size: 1.3rem;
}

.userInfo p {
  font-size: 1.3rem;
  line-height: 2rem;
}

.void {
  min-height: 6rem;
}
</style>