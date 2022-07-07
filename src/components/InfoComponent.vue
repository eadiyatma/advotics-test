<script setup>
import CardComponent from "./CardComponent.vue";
</script>

<template>
  <div class="max-w-[276px]">
    <CardComponent class="flex-col gap-2">
      <!-- label and option -->
      <div class="flex justify-between item-center w-full">
        <div class="capitalize">sales turnover</div>
        <div>m</div>
      </div>
      <div class="w-full flex items-center gap-4">
        <!-- info -->
        <div class="flex flex-col">
          <div class="text-[25px] font-bold">Rp. 3,600,000</div>
          <div class="text-[10px]">
            <span class="text-red-500">13.8%</span> last period in products sold
          </div>
        </div>
        <!-- icon -->
        <div>s</div>
      </div>
    </CardComponent>
  </div>
</template>
