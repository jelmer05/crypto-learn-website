<script setup></script>

<template>
  <section
    class="Login container bg-white/50 rounded-lg self-center flex justify-center flex-col gap-5"
  >
    <div class="self-center">
      <h1 class="text-white text-bold">Login ...</h1>
      <p>Vul hier je gegevens in</p>
    </div>
    <div class="flex flex-col gap-3  items-center md:flex-row md:justify-around w-full ">
      <div class="input-fields order-2 bg-white/60 md:order-1 w-4/5 md:w-1/3 rounded">
        <input type="text" />
      </div>      <div class="input-data order-1 bg-white/60 md:order-2  w-4/5 md:w-1/3 p-10 rounded">

        <h2>Reset</h2>
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
