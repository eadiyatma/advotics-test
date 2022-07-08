<script setup>
import IconProfile from "./icons/IconProfile.vue";
const profile = new URL(`../assets/Profile.svg`, import.meta.url).href;
const logout = new URL(`../assets/logout.png`, import.meta.url).href;
const logo = new URL(`../assets/logo.jpg`, import.meta.url).href;
</script>

<template>
  <nav
    class="fixed top-0 h-16 w-full bg-white shadow-navbar px-8 flex justify-between items-center"
  >
    <!-- logo -->
    <div>
      <div class="flex gap-2">
        <div class="w-28">
          <img :src="logo" alt="profile" />
        </div>

        <div class="flex justify-end items-end gap-1">
          <div class="text-[11px]">powered by</div>
          <div class="w-14">
            <img :src="logo" alt="profile" />
          </div>
        </div>
      </div>
    </div>
    <!-- profile -->
    <div class="flex flex-row gap-4 items-center">
      <div class="flex flex-col justify-center text-right">
        <h3 class="text-sm font-medium text-title">Username</h3>
        <h4 class="text-title font-normal text-[12px]">Company Name</h4>
      </div>
      <div>
        <button class="w-8 flex items-center">
          <img :src="profile" alt="profile" />
        </button>
      </div>
      <div class="w-8 flex items-center justify-center">
        <button>
          <img :src="logout" class="mx-auto" alt="logout" />
        </button>
      </div>
    </div>
  </nav>
</template>
