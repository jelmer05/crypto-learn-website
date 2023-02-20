<script setup>
import { NORMALIZE_STYLE } from "@vue/compiler-core";
import { ref, defineEmits } from "vue";

const nameInput = ref("");
const emit = defineEmits(['NameData']);

const handleSubmit = () => {
  // Emit an event with a constant reference value
  emit('NameData', nameInput.value);
}

const resultName = ref(null);
</script>
<template>
  <section
    class="h-screen flex-col gap-2 items-center  flex justify-center bg-cyan-700"
  >
    <div
      class="bg-white/80  p-6 flex justify-around flex-col gap-5 h-1/2 w-10/12 lg:w-1/3 rounded-lg"
    >
    <div>
      
      <h1>Enter name:</h1>
    </div>

      <input
        class="h-10 w-full px-3 rounded"
        v-model="nameInput"
        type="text"
      />
      <button
@click="handleSubmit"
        class="bg-white w-full h-8 rounded transition hover:bg-cyan-700/80 hover:text-white"
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
