<script setup>
import { ref } from "vue";

const { LoginData } = defineProps(["LoginData"]);

const inputDataFields = ref("");
const Namechange = ref("");

const changeHandler = () => {
  Namechange.value = inputDataFields.value;
};
</script>

<template>
  <section
    class="Login container flex h-screen flex-col justify-start gap-5 self-center rounded-lg bg-white/50 pt-6"
  >
    <div class="self-center">
      <h1 class="text-bold text-white">Account ...</h1>
      <p>Bekijk en verander gegevens.</p>
    </div>
    <div
      class="flex w-full flex-col items-center gap-3 md:flex-row md:justify-around"
    >
      <div
        class="input-fields order-2 flex w-4/5 flex-col justify-around gap-4 rounded bg-white/60 py-6 md:order-1 md:w-1/3"
      >
        <div class="title-account self-center">
          <h2>Change info</h2>
        </div>
        <div class="flex items-center justify-around">
          <label for="name">name</label>
          <input
            v-model="inputDataFields"
            :placeholder="LoginData"
            class="w-2/3 rounded p-1 transition focus:bg-cyan-700/80 focus:text-white focus:placeholder:text-white"
            type="text"
          />
        </div>
        <button
          @click="changeHandler"
          class="h-8 w-2/3 self-center rounded bg-white transition hover:bg-cyan-700/80 hover:text-white"
        >
          Change
        </button>
      </div>
      <div
        class="input-data :order-2 order-1 flex w-4/5 flex-col justify-around gap-4 rounded bg-white/60 p-10 md:w-1/3"
      >
        <div class="title-account self-center">
          <h2>Account info</h2>
        </div>
        <div>
          <li>
            Naam: <span>{{ LoginData }}</span>
          </li>
          <li>favorites: <span>7</span></li>
          <li>Best coint: <span>BTC</span></li>
          <li>Worst coint: <span>eth</span></li>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
h1 {
  font-size: 2rem !important;
  font-family: "Bebas Neue", cursive;
}
</style>
