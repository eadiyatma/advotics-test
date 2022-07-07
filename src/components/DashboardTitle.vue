<script setup>
import CardComponent from "./CardComponent.vue";
import moment from "moment";
import id from "moment/dist/locale/id";
import { ref } from "vue";
import IconCalendar from "./icons/IconCalendar.vue";
import IconChevronDown from "./icons/IconChevronDown.vue";
import IconChevronUp from "./icons/IconChevronUp.vue";
import { useDateStore } from "../stores/date";

const dateStore = useDateStore();

const date = new Date();
moment.locales("id");

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
        {{ moment(dateStore.date.start).format("LL") }}
        -
        {{ moment(dateStore.date.end).format("LL") }}
        <IconChevronDown />
      </CardComponent>
      <!-- floating calendar -->
      <div v-if="showCalendar" class="absolute top-0 right-0">
        <CardComponent class="flex-col gap-2">
          <div class="flex justify-between items-center w-full">
            <h2 class="font-semibold">Period</h2>
            <button @click="toggleCalendar" class="font-semibold">X</button>
          </div>
          <div class="flex">
            <v-date-picker
              v-model="dateStore.date"
              trim-weeks
              is-range
              :columns="2"
              :attributes="dateStore.attrs"
              color="green"
            ></v-date-picker>
          </div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>
