<script setup>
import CardComponent from "./CardComponent.vue";
import IconDotsVertical from "./icons/IconDotsVertical.vue";
import ButtonComponents from "./ButtonComponents.vue";
import IconCart from "./icons/IconCart.vue";
</script>

<template>
  <div class="w-1/4">
    <CardComponent class="flex-col gap-2">
      <!-- label and option -->
      <div class="flex justify-between item-center w-full">
        <div class="capitalize">sales turnover</div>
        <ButtonComponents>
          <IconDotsVertical />
        </ButtonComponents>
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
        <IconCart class="w-12" />
      </div>
    </CardComponent>
  </div>
</template>
