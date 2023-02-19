<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="container-fluid text-white mt-6 mb-6 h-9 flex justify-around items-center"
  >
    <div>
      <router-link
        to="/"
        class="nav-title-t text-3xl hover:bg-gray-400/10 cursor-pointer"
      >
        Crypto
      </router-link>
    </div>
    <div>
      <ul class="flex gap-10">
        <router-link active-class="active" class="hover:bg-gray-400/10" to="/"
          >Home
        </router-link>

        <router-link
          active-class="active"
          class="hover:bg-gray-400/10"
          to="/login"
          >Account
        </router-link>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.active {
  font-weight: bold;
}

.nav-title-t {
  font-family: "Bebas Neue", cursive;
}
</style>
