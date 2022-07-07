<script setup>
import CardComponent from "./CardComponent.vue";
import MarketInsightComponent from "./MarketInsightComponent.vue";
import InfoComponent from "./InfoComponent.vue";
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex justify-between items-center">
      <!-- title dashboard -->
      <h1 class="text-title font-bold">Dashboard</h1>
      <!-- calendar -->
      <div>
        <CardComponent> ini calendar</CardComponent>
      </div>
    </div>

    <!-- title market insight -->
    <MarketInsightComponent />

    <!-- info -->
    <InfoComponent />

    <!-- chart and list selling / competitor -->
    <div class="flex"></div>
  </div>
</template>
