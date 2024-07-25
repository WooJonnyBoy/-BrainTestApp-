<script setup>
import { pageNumber, questions } from "../store/store.js";

import { ref } from "vue";

const checked = ref("");

const setCheck = (val) => {
  checked.value = val;
};

const next = () => {
  pageNumber.nextPage();
  checked.value = "";
};
</script>

<template>
  <section>
    <div class="bg">
      <div class="testPage">
        <div class="header">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
        <div class="progress">
          <div
            :style="{
              width:
                (100 / questions.length) * (pageNumber.questionPage + 1) + '%',
            }"
          ></div>
        </div>
        <div class="block_questions">
          <h4 class="quest">
            {{ questions[pageNumber.questionPage].question }}
          </h4>
          <div
            v-if="questions[pageNumber.questionPage].img"
            :class="[
              questions[pageNumber.questionPage].type == 4
                ? 'img_spiner'
                : 'img_wrap',
            ]"
          >
            <img :src="questions[pageNumber.questionPage].img" alt="" />
          </div>
          
          <ul v-if="questions[pageNumber.questionPage].type == 1" class="ul">
            <li
              v-for="item in questions[pageNumber.questionPage].answers"
              v-bind:key="item"
            >
              <div
                :class="[checked === item ? 'li_checked' : 'li']"
                @click="setCheck(item)"
              >
                <div
                  :class="[checked === item ? 'check_checked' : 'check']"
                ></div>
                {{ item }}
              </div>
            </li>
          </ul>
          <ul
            v-if="questions[pageNumber.questionPage].type == 2"
            class="ul_color"
          >
            <li
              v-for="item in questions[pageNumber.questionPage].answers"
              v-bind:key="item"
            >
              <div
                :style="{ 'background-color': item }"
                :class="[checked === item ? 'li_checked_color' : 'li_color']"
                @click="setCheck(item)"
              ></div>
            </li>
          </ul>
          <hr v-if="questions[pageNumber.questionPage].type == 3" />
          <ul
            v-if="questions[pageNumber.questionPage].type == 3"
            class="ul_img"
          >
            <li
              v-for="item in questions[pageNumber.questionPage].answers"
              v-bind:key="item"
            >
              <div
                :class="[checked === item ? 'li_checked_img' : 'li_img']"
                @click="setCheck(item)"
              >
                {{ item }}
              </div>
            </li>
          </ul>
        </div>
        <div
            v-if="questions[pageNumber.questionPage].type == 4"
            class="sp_uns"
          >
            {{ questions[pageNumber.questionPage].answers }}
          </div>

        <button
          v-if="questions[pageNumber.questionPage].type !== 4"
          :class="[checked ? 'button_active' : 'button']"
          @click="next()"
          :disabled="checked ? disabled : ''"
        >
          ДАЛЕЕ
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.header {
  position: absolute;
  color: var(--text-yellow);
  top: -2rem;
  left: 50%;
  transform: translateX(-40%);
  font-size: 1rem;
  text-wrap: nowrap;
}

.header::before {
  content: "";
  width: 2.2rem;
  aspect-ratio: 1;
  position: absolute;
  top: -5px;
  left: -2.5rem;
  background: url(../assets/img/brainonly.png) no-repeat;
  background-size: 100%;
  background-position: center center;
  z-index: 10;
}

.testPage {
  position: relative;
  margin: 0 auto;
  height: calc(100dvh - 46px);
  width: 100%;
  min-height: 550px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: brightness(0.4);
  font-size: 1.4rem;
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-style: normal;
}

.bg {
  background: url(../assets/img/bgquestons.png);
  background-size: 100%;
}

.progress {
  width: 85%;
  max-width: 400px;
  height: 12px;
  border-radius: 5px;
  background-color: #ffffff99;
  & div {
    height: 12px;
    background-color: #3bde7c;
    border-radius: 5px;
  }
}

.block_questions {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.quest {
  color: white;
  margin: 0 0 1rem 0;
  text-align: center;
  white-space: pre-wrap;
  padding: 0 2rem;
}

.ul {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}

.li {
  width: 100%;
  min-height: 45px;
  height: max-content;
  color: white;
  list-style: none;
  background-color: #f2f3f325;
  display: flex;
  padding: 0 1rem;
  gap: 2rem;
  align-items: center;
  overflow: hidden;
}

.li_checked {
  width: 100%;
  min-height: 45px;
  color: white;
  list-style: none;
  background-color: var(--text-yellow);
  padding: 0 1rem;
  display: flex;
  gap: 2rem;
  color: black;
  align-items: center;
}

.check {
  margin-left: 1rem;
  min-width: 22px;
  min-height: 22px;
  border-radius: 10px;
  border: 1px solid white;
}

.check_checked {
  margin-left: 1rem;
  min-width: 22px;
  min-height: 22px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #2950c2;
}

.button {
  margin-bottom: 1.5rem;
  padding: 1rem 4rem;
  border-radius: 50px;
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.1rem;
  color: #8e8e8e;
  border: none;
  background-color: #dadada;
  box-shadow: inset 0 4px 10px 0 rgba(0, 0, 0, 0.25);
}

.button_active {
  margin-bottom: 1.5rem;
  padding: 1rem 4rem;
  border-radius: 50px;
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.1rem;
  color: black;
  border: none;
  background-color: var(--text-yellow);
  box-shadow: inset 0 4px 10px 0 rgba(0, 0, 0, 0.25);
}

img {
  width: 100%;
  height: fit-content;
}

.img_spiner {
  margin-top: 3rem;
  width: 4rem;
  animation: rotate 1s infinite linear;
}

@keyframes rotate {
  0% {
  }
  100% {
    transform: rotate(360deg);
  }
}

.sp_uns {
  max-width: 400px;
  color: white;
  margin:  3rem 3rem 10rem 3rem;
  font-size: 1.1rem;
  overflow: hidden;
}

hr {
  margin: 1rem 0 0 0;
  width: 100%;
  height: 4px;
  background-color: #f2f3f33a;
  border: none;
}

.img_wrap {
  width: 50%;
  display: flex;
  justify-content: center;
}

.ul_color {
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 2rem;
}

.li_color {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
}

.li_checked_color {
  border: 10px solid orange;
  aspect-ratio: 1;
}

li {
  list-style: none;
  height: max-content;
  overflow: hidden;
}

.ul_img {
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
}

.li_img {
  max-width: 4rem;
  min-width: 3rem;
  aspect-ratio: 1;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.li_checked_img {
  max-width: 4rem;
  min-width: 3rem;
  aspect-ratio: 1;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid orange;
}
</style>