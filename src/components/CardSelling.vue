<script setup>
const props = defineProps({
  isFirst: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="flex w-full rounded border">
    <!-- image -->
    <div :class="isFirst ? 'w-32' : 'w-28'">
      <img src="https://picsum.photos/id/1/200/200" alt="" />
    </div>
    <!-- description -->
    <div
      class="flex flex-col justify-between w-full p-2"
      :class="isFirst ? 'bg-orange-100' : ''"
    >
      <div
        class="capitalize font-medium"
        :class="isFirst ? 'text-xl' : 'text-base'"
      >
        {{ props.name ? props.name : "[Nama Product]" }}
      </div>
      <div class="flex justify-between">
        <div>{{ props.price > 0 ? props.price : "[Rp XXXX]" }}</div>
        <div>{{ props.quantity > 0 ? props.quantity : "[jml terjual]" }}</div>
      </div>
    </div>
  </div>
</template>
