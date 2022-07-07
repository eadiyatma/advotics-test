<script setup>
import IconLightBulb from "./icons/IconLightBulb.vue";
import IconChevronUp from "./icons/IconChevronUp.vue";
</script>

<template>
  <div>
    <div
      class="px-4 py-2 bg-primary text-white flex justify-between items-center"
    >
      <h2 class="uppercase font-bold">market insight</h2>
      <div class="flex gap-2 items-center">
        <IconLightBulb />
        <a class="underline text-sm">Click here for help</a>
        <IconChevronUp />
      </div>
    </div>
  </div>
</template>
