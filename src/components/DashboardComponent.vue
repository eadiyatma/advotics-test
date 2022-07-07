<script setup>
import SidebarComponent from "./SidebarComponent.vue";
import LayoutComponent from "./LayoutComponent.vue";
import NavbarComponent from "./NavbarComponent.vue";
import DashboardTitle from "./DashboardTitle.vue";
</script>

<template>
  <div>
    <SidebarComponent />
    <NavbarComponent />
    <LayoutComponent>
      <DashboardTitle />
    </LayoutComponent>
  </div>
</template>
