<script setup>
import {store} from '../store/store.js'
</script>

<template>
  <div class="dropMenu">
    <div @click="store.openCloseMenu()" class="close"></div>
    <ul>
      <li @click="store.onMain()">ГЛАВНАЯ</li>
      <a href="#end"><li @click="store.closeEndPage()">ИНФОРМАЦИЯ О ТЕСТЕ</li></a>
      <li @click="store.openTest()">ПРОЙТИ ТЕСТ</li>
    </ul>
  </div>
</template>

<style scoped>
.dropMenu {
  position: absolute;
  inset: 0 0 0 0;
  width: 100%;
  height: 100dvh;
  background-color: #272727;
  color: white;
  z-index: 100;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

ul {
  margin: 6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.3rem;
}

li {
  list-style: none;
  cursor: pointer;
}

li:hover {
  color: var(--text-yellow);
}

.close {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 1rem;
  right: 1rem;
  background: url(../assets/img/close.png) no-repeat;
}

a {
  text-decoration: none;
  color: white;
}
</style>