<script setup>
import { store } from '../store/store.js'
</script>

<template>
  <div class="header">
    <div class="menu" @click="store.openCloseMenu()"></div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 46px;
  min-width: 300px;
  background-color: var(--main-bg-color);
  color: white;
}

.menu {
  margin-top: 15px;
  margin-left: 15px;
  width: 30px;
  height: 20px;
  background: url(../assets/img/menu.png) no-repeat;
  background-size: cover;
}
</style>