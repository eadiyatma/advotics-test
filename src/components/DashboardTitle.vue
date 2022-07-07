<script setup>
import CardComponent from "./CardComponent.vue";
import moment from "moment";
import id from "moment/dist/locale/id";
import { ref } from "vue";
import IconCalendar from "./icons/IconCalendar.vue";
import IconChevronDown from "./icons/IconChevronDown.vue";
import IconChevronUp from "./icons/IconChevronUp.vue";

const date = new Date();
moment.locales("id");
console.log(moment(date).format("LL"));

const dateNow = moment(date).format("LL");

const fromDate = ref(moment(date).format("LL"));
const toDate = ref(moment(date.setDate(date.getDate() - 7)).format("LL"));

const showCalendar = ref(false);

const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value;
};
</script>

<template>
  <div class="flex justify-between items-center">
    <!-- title dashboard -->
    <h1 class="text-title font-bold">Dashboard</h1>
    <!-- calendar -->
    <div class="relative">
      <CardComponent
        class="gap-2 text-calendar hover:cursor-pointer hover:bg-gray-50 transition-colors duration-150 ease-out"
        @click="toggleCalendar"
      >
        <IconCalendar />
        <div>Period</div>
        {{ fromDate }} - {{ toDate }}
        <IconChevronDown />
      </CardComponent>
      <!-- floating calendar -->
      <div v-if="showCalendar" class="absolute top-0 right-0">
        <CardComponent class="flex-col gap-2">
          <div class="flex justify-between items-center w-full">
            <h2 class="font-semibold">Period</h2>
            <button @click="toggleCalendar" class="font-semibold">
              <IconChevronUp />
            </button>
          </div>
          <div class="flex">
            <v-date-picker trim-weeks is-range :columns="2"></v-date-picker>
          </div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>
