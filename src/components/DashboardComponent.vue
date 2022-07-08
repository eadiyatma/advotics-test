<script setup>
import SidebarComponent from "./SidebarComponent.vue";
import LayoutComponent from "./LayoutComponent.vue";
import NavbarComponent from "./NavbarComponent.vue";
import DashboardTitle from "./DashboardTitle.vue";
import MarketInsightComponent from "./MarketInsightComponent.vue";
import InfoComponent from "./InfoComponent.vue";
import CardComponent from "./CardComponent.vue";
import CardTitle from "./CardTitle.vue";
import ChartComponent from "./ChartComponent.vue";
import CardSelling from "./CardSelling.vue";
import { useMainStore } from "../stores/mainStore";

const mainStore = useMainStore();
</script>

<template>
  <div>
    <SidebarComponent />
    <NavbarComponent />
    <LayoutComponent class="flex flex-col gap-4">
      <DashboardTitle />

      <!-- title market insight -->
      <MarketInsightComponent />

      <!-- info -->
      <InfoComponent />

      <!-- chart and list selling / competitor -->
      <div class="flex gap-4">
        <!-- chart -->
        <div class="w-1/2">
          <CardComponent class="flex-col flex-1 gap-2 h-full">
            <CardTitle label="average purchase value">
              <CardComponent class="text-xs font-medium text-title-card"
                >Last 6 months</CardComponent
              >
            </CardTitle>
            <!-- card body -->
            <div class="w-full items-center justify-center">
              <ChartComponent />
            </div>
          </CardComponent>
        </div>
        <div class="w-1/4">
          <CardComponent class="flex-col gap-2 h-full">
            <CardTitle label="Best selling sku" class="mb-4" />
            <CardSelling
              v-for="(item, index) in mainStore.bestSelling"
              :key="index"
              :is-first="index == 0"
            />
          </CardComponent>
        </div>
        <div class="w-1/4">
          <CardComponent class="flex-col gap-2 h-full">
            <CardTitle label="top competitor sku" class="mb-4" />
            <CardSelling
              v-for="(item, index) in mainStore.competitorSelling"
              :key="index"
              :is-first="index == 0"
            />
          </CardComponent>
        </div>
      </div>
    </LayoutComponent>
  </div>
</template>
