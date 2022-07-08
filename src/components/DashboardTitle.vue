<script setup>
import CardComponent from "./CardComponent.vue";
import moment from "moment";
import id from "moment/dist/locale/id";
import { ref } from "vue";
import IconCalendar from "./icons/IconCalendar.vue";
import IconChevronDown from "./icons/IconChevronDown.vue";
import IconChevronUp from "./icons/IconChevronUp.vue";
import { useDateStore } from "../stores/dateStore";
import ButtonDate from "./ButtonDate.vue";

const dateStore = useDateStore();

moment.locales("id");

const showCalendar = ref(false);

const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value;
};

const dates = ref({
  start: new Date(),
  end: new Date(),
});

const todayDate = () => {
  isActiveButton.value = 1;
  dates.value = {
    start: new Date(),
    end: new Date(),
  };
  dateStore.newDate(dates.value.start, dates.value.end);
};
const yesterdayDate = () => {
  isActiveButton.value = 2;
  dates.value = {
    start: new Date().setDate(new Date().getDate() - 1),
    end: new Date().setDate(new Date().getDate() - 1),
  };
  dateStore.newDate(dates.value.start, dates.value.end);
};
const lastWeekDate = () => {
  isActiveButton.value = 3;
  dates.value = {
    start: new Date(),
    end: new Date().setDate(new Date().getDate() - 7),
  };
  dateStore.newDate(dates.value.start, dates.value.end);
};
const lastMonthDate = () => {
  isActiveButton.value = 4;
  dates.value = {
    start: new Date(),
    end: new Date().setDate(new Date().getDate() - 30),
  };
  dateStore.newDate(dates.value.start, dates.value.end);
};
const thisMonthDate = () => {
  isActiveButton.value = 5;
  const date = new Date();
  dates.value = {
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    end: new Date(date.getFullYear(), date.getMonth(), 1),
  };
  dateStore.newDate(dates.value.start, dates.value.end);
};
const customDate = () => {
  isActiveButton.value = 6;
  console.log(dateStore.date.start);
  console.log(dateStore.date.end);
  var endDate = new Date(dateStore.date.end);

  if (dateStore.date.start.getDate() == endDate.toUTCString()) {
    dates.value = {
      start: dateStore.date.start,
      end: new Date().setDate(dateStore.date.end.getDate() - 1),
    };
    dateStore.newDate(dates.value.start, dates.value.end);
    return;
  }
  dates.value = {
    start: dateStore.date.end,
    end: dateStore.date.start,
  };
  dateStore.newDate(dateStore.date.start, dateStore.date.end);
};

const applyDate = () => {
  switch (isActiveButton.value) {
    case 0:
      lastWeekDate();
      break;
    case 1:
      todayDate();
      break;
    case 2:
      yesterdayDate();
      break;
    case 3:
      lastWeekDate();
      break;
    case 4:
      lastMonthDate();
      break;
    case 5:
      thisMonthDate();
      break;
    case 6:
      customDate();
      break;
  }
  // dateStore.newDate(dates.value.start, dates.value.end);
  dateStore.startDate = dateStore.date.start;
  dateStore.endDate = dateStore.date.end;
};
const isActiveButton = ref(0);
</script>

<template>
  <div class="flex justify-between items-center relative">
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
        {{ moment(dateStore.endDate).format("LL") }}
        -
        {{ moment(dateStore.startDate).format("LL") }}
        <IconChevronDown />
      </CardComponent>
      <!-- floating calendar -->
      <div v-if="showCalendar" class="absolute top-0 right-0 z-10">
        <CardComponent class="flex-col gap-2">
          <div class="flex justify-between items-center w-full">
            <h2 class="font-semibold pl-2">Period</h2>
            <button @click="toggleCalendar" class="font-semibold">X</button>
          </div>
          <div class="flex gap-2">
            <!-- filter section -->
            <div class="flex flex-col gap-2 h-full pr-4">
              <ButtonDate @click="todayDate" :is-active="isActiveButton == 1">
                Today
              </ButtonDate>
              <ButtonDate
                @click="yesterdayDate"
                :is-active="isActiveButton == 2"
              >
                Yesterday
              </ButtonDate>
              <ButtonDate
                @click="lastWeekDate"
                :is-active="isActiveButton == 3"
              >
                Last 7 Day
              </ButtonDate>
              <ButtonDate
                @click="lastMonthDate"
                :is-active="isActiveButton == 4"
              >
                Last 30 Day
              </ButtonDate>
              <ButtonDate
                @click="thisMonthDate"
                :is-active="isActiveButton == 5"
              >
                This Month
              </ButtonDate>
              <ButtonDate @click="customDate" :is-active="isActiveButton == 6">
                Custom
              </ButtonDate>

              <!-- button apply -->
              <button
                class="bg-primary text-white font-semibold py-2 px-4 rounded w-36"
                @click="
                  applyDate();
                  toggleCalendar();
                "
              >
                Apply
              </button>
            </div>

            <!-- calendar section -->
            <div class="pl-4 border-l">
              <v-date-picker
                v-model="dateStore.date"
                is-range
                :columns="2"
                :attributes="dateStore.attrs"
                :min-date="dateStore.minDate"
                :max-date="dateStore.maxDate"
                color="green"
              ></v-date-picker>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
    <!-- black bar -->
    <div
      @click="toggleCalendar"
      v-if="showCalendar"
      class="fixed left-0 right-0 top-0 z-[9] w-screen flex h-screen"
    ></div>
  </div>
</template>
