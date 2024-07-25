<script setup>
import SectionOne from "../components/SectionOne.vue";
import SectionTwo from "../components/SectionTwo.vue";
import SectionThree from "../components/SectionThree.vue";
import SectionFore from "../components/SectionFore.vue";
import Header from "../components/Header.vue";
import DropMenu from "../components/DropMenu.vue";
import TestPage from '../pages/TestPage.vue'
import { ref } from "vue";

let drop = ref(false);
let questionPageIsOpen = ref(false);

const openCloseMenu = () => {
  drop.value = !drop.value;
};
const onMain = () => {
  questionPageIsOpen.value = false;
  drop.value = false;
}
const openTest = () => {
  questionPageIsOpen.value = true;
  drop.value = false
}

</script>

<template>
  <div class="container">
    <div v-if="drop"><DropMenu @close="() => openCloseMenu()" @onMainPage="() => onMain()" @openTest="() => openTest()"/></div>
    <Header @open="() => openCloseMenu()"/>
    <div v-if="questionPageIsOpen">
      <TestPage />
    </div>
    <div v-if="!questionPageIsOpen">
      <SectionOne @openTest="() => openTest()"/>
      <SectionTwo />
      <SectionThree @openTest="() => openTest()"/>
      <SectionFore @openTest="() => openTest()"/>
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