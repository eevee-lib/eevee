<script setup lang="ts">
import { computed, ref } from "vue";

const { label, bgColor } = withDefaults(
  defineProps<{ label: string; bgColor?: string }>(),
  {
    bgColor: "#000",
  }
);

const style = computed(() => "background: " + bgColor);
</script>

<template>
  <div>
    <button
      type="button"
      class="bg-red-500 text-white p-2 rounded-lg dark:bg-cyan-200"
    >
      {{ label }}
    </button>
  </div>
</template>
