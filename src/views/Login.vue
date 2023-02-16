<template>
  <div>
    <button @click="toggleRef">Toggle Ref</button>
    <div :class="{ 'my-class': myRef }">
      This element has a conditional class
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const myRef = ref(false);

    const toggleRef = () => {
      myRef.value = !myRef.value;
    };

    return { myRef, toggleRef };
  },
};
</script>

<style>
.my-class {
  background-color: yellow;
}
</style>
