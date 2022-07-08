<script setup>
const props = defineProps({
  /**
   * @type {Boolean}
   * bool is active
   */
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="w-full py-2 pl-2 border-b flex items-start justify-start text-left capitalize bg-white hover:bg-gray-50 transition-colors duration-150 ease-out"
    :class="`${
      isActive ? 'bg-primary hover:bg-green-600 text-white font-bold' : ''
    }`"
  >
    <slot />
  </button>
</template>
