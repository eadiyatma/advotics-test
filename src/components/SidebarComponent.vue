<script setup>
import { useRouter } from "vue-router";
import IconSegment from "./icons/IconSegment.vue";
const iconDashboard = new URL(`../assets/iconDashboard.svg`, import.meta.url)
  .href;

const router = useRouter();
</script>

<template>
  <nav class="h-screen border w-[72px] fixed bg-white pt-[70px] flex flex-col">
    <div class="p-4 py-2 -scale-x-100">
      <IconSegment />
    </div>
    <div class="flex p-4 items-center justify-center bg-gray-300">
      <button class="flex bg-white w-6 p-1 rounded">
        <img class="mx-auto" :src="iconDashboard" />
      </button>
    </div>
  </nav>
</template>
