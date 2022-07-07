<script setup>
import IconDotsVertical from "./icons/IconDotsVertical.vue";
import ButtonComponents from "./ButtonComponents.vue";

const props = defineProps({
  /**
   * @type {String}
   * label of title
   */
  label: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="flex justify-between item-center w-full uppercase text-title-card"
  >
    <div class="flex items-center">
      {{ props.label }}
    </div>
    <div class="flex items-center justify-center gap-2">
      <slot />
      <ButtonComponents>
        <IconDotsVertical />
      </ButtonComponents>
    </div>
  </div>
</template>
