<script setup>
import { ref, watch, computed } from "vue";
import { Chart, registerables } from "chart.js";
import { remove } from "@vue/shared";
Chart.register(...registerables);

const { BTCData, LoginData } = defineProps(["BTCData", 'LoginData']);

const loginName = ref(LoginData)
const cryptoData = ref(BTCData);
const btcInput = ref("");
const favCounter = ref("0");

watch(btcInput, () => {
  cryptoData.value = BTCData.filter((coin) =>
    coin.symbol.toLowerCase().includes(btcInput.value.toLowerCase())
  );
});

function toggleFavorite(index) {
  const coin = cryptoData.value[index];
  coin.favorite = !coin.favorite;

  if (coin.favorite) {
    favCounter.value++;
  } else {
    favCounter.value--;
  }
}

const coinChanceClass = computed(() => {
  return (coin) => {
    if (coin.priceChangePercent < 0) {
      return "text-red-500";
    }
    if (coin.priceChangePercent > 0) {
      return "text-green-500";
    } else {
      return "";
    }
  };
});

</script>

<template>
  <div class="container p-6 self-center flex justify-around">
    <div class="w-50 text-center">
      <h2
        class="text-3xl text-white tracking-wide underline underline-offset-4"
      >
        welcome, {{loginName}}
      </h2>
    </div>

    <div>
      <input
        class="rounded-lg text-center h-8 drop-shadow-xl"
        v-model.trim="btcInput"
        type="text"
        placeholder="filter..."
      />
    </div>
  </div>

  <div
    class="container flex flex-col gap-3 self-center p-6 h-50 rounded-lg bg-white/50 mt-10"
  >
    <div class="nav grid grid-cols-5 P-3 text-white">
      <div><p>Name</p></div>
      <div><p>Price</p></div>
      <div><p>24h change</p></div>
      <div><p>day trend</p></div>
      <div><p>Favorite</p></div>
    </div>
    <section v-if="cryptoData.length > 0" class="gap-3 flex flex-col">
      <div
        v-for="(coin, index) in cryptoData"
        :key="coin.symbol"
        class="coin bg-white/50 rounded-lg p-3 grid grid-cols-5"
      >
        <div>
          <p class="font-bold">{{ coin.symbol }}</p>
        </div>
        <div>
          <p>
            {{ Number(coin.weightedAvgPrice).toFixed(4) }}

            {{ coin.symbol.slice(-3) }}
          </p>
        </div>
        <div>
          <p :class="[coinChanceClass(coin)]">
            {{ Number(coin.priceChangePercent).toFixed(2) }}%
          </p>
        </div>
        <div>
          <h2>ukg</h2>
        </div>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
              @click="toggleFavorite(index)"
              :class="{ 'fill-yellow-400': coin.favorite }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <div v-else>
      <h1>Nothing found: "{{ btcInput }}"</h1>
    </div>
  </div>
</template>
<style>
h1,
h2,
h3,
p {
  font-family: "Roboto", sans-serif;
}

h2 {
  font-family: "Bebas Neue", cursive;
}
</style>
