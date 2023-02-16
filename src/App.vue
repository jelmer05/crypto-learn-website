<script setup>
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import axios from "axios";
import loading from "./views/LoadingView.vue";
import Nav from "./components/Nav.vue";

// const axios = require("axios");

const options = {
  method: "GET",
  url: "https://binance43.p.rapidapi.com/ticker/24hr",
  headers: {
    "X-RapidAPI-Key": "a0ecaa63famshfd30470d7af640ep1edb4cjsnab1dcd33b654",
    "X-RapidAPI-Host": "binance43.p.rapidapi.com",
  },
};
const coinData = ref([]);

axios
  .request(options)
  .then(function (response) {
    coinData.value = response.data.slice(0, 100);
  })
  .catch(function (error) {
    console.error(error);
  });

console.log(coinData.value);
</script>
<template>
  <div
    class="container-fluid pt-4 app-tl bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen"
  >
    <Nav />
    <div class="container-fluid flex flex-col">
      <RouterView :BTCData="coinData" v-if="coinData.length > 0" />
      <loading v-else />
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap");
</style>
