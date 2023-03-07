<script setup>
import { NORMALIZE_STYLE } from "@vue/compiler-core";
import { ref, defineEmits } from "vue";

const nameInput = ref("");
const emit = defineEmits(["NameData"]);

const handleSubmit = () => {
  // Emit an event with a constant reference value
  emit("NameData", nameInput.value);
};

const resultName = ref(null);
</script>
<template>
  <section
    class="flex h-screen flex-col items-center justify-center gap-2 bg-cyan-700"
  >
    <div
      class="flex h-1/2 w-10/12 flex-col justify-around gap-5 rounded-lg bg-white/80 p-6 lg:w-1/3"
    >
      <div>
        <h1>Enter name:</h1>
      </div>

      <input class="h-10 w-full rounded px-3" v-model="nameInput" type="text" />
      <button
        @click="handleSubmit"
        class="h-8 w-full rounded bg-white transition hover:bg-cyan-700/80 hover:text-white"
      >
        Submit
      </button>
    </div>
    <div class="disclaimer m-4 text-white/50">
      <p>
        This data is only used to personalize the website, stored in your
        localstorage.
      </p>
    </div>
  </section>
</template>
