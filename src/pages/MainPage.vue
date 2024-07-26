<script setup>
import SectionOne from "../components/SectionOne.vue";
import SectionTwo from "../components/SectionTwo.vue";
import SectionThree from "../components/SectionThree.vue";
import SectionFore from "../components/SectionFore.vue";
import Header from "../components/Header.vue";
import DropMenu from "../components/DropMenu.vue";
import TestPage from '../pages/TestPage.vue'
import TheEndPage from '../pages/TheEndPage.vue'
import { store } from '../store/store.js'

</script>

<template>
  <div class="container">
    <div v-if="store.drop"><DropMenu /></div>
    <Header />
    <div v-if="store.questionPageIsOpen">
      <TestPage />
    </div>
    <div v-if="store.theEnd">
      <TheEndPage />
    </div>
    <div v-if="!store.questionPageIsOpen && !store.theEnd">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFore />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  max-width: 700px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}
</style>