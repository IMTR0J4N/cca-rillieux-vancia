<script setup lang="ts">
defineProps<{
  src?: string | null
  label: string
  style?: Record<string, string>
  class?: string
}>()
</script>

<template>
  <img
    v-if="src"
    :src="src"
    :alt="label"
    :class="$props.class"
    :style="{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...$props.style }"
  />
  <div
    v-else
    class="cca-img-placeholder"
    :class="$props.class"
    :style="{ width: '100%', height: '100%', ...$props.style }"
  >
    [{{ label }}]
  </div>
</template>
