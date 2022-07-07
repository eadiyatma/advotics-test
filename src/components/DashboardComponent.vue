<script setup>
import SidebarComponent from "./SidebarComponent.vue";
import LayoutComponent from "./LayoutComponent.vue";
import NavbarComponent from "./NavbarComponent.vue";
import DashboardTitle from "./DashboardTitle.vue";
import MarketInsightComponent from "./MarketInsightComponent.vue";
import InfoComponent from "./InfoComponent.vue";
import CardComponent from "./CardComponent.vue";
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
          <CardComponent>ini card chart</CardComponent>
        </div>
        <div class="w-1/4">
          <CardComponent>ini card chart</CardComponent>
        </div>
        <div class="w-1/4">
          <CardComponent>ini card chart</CardComponent>
        </div>
      </div>
    </LayoutComponent>
  </div>
</template>
