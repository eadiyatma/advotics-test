<script setup>
import { ref } from "vue";
import { useMainStore } from "@/stores/mainStore";

const mainStore = useMainStore();
</script>

<template>
  <div>
    <apexchart
      type="bar"
      height="350"
      :options="mainStore.chartOptions"
      :series="mainStore.series"
    ></apexchart>
  </div>
</template>
