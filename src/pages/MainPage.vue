<script setup>
import SectionOne from "../components/SectionOne.vue";
import SectionTwo from "../components/SectionTwo.vue";
import SectionThree from "../components/SectionThree.vue";
import SectionFore from '../components/SectionFore.vue'
import Header from "../components/Header.vue";
import DropMenu from "../components/DropMenu.vue";
import {ref} from 'vue'

let drop = ref(false)

const OpenCloseMenu = () => {
  drop.value = !drop.value;
}

</script>

<template>
  <div class="container">
    <div v-if="drop"><DropMenu @close="() => OpenCloseMenu()" /></div>
    <Header @open="() => OpenCloseMenu()" />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFore />
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