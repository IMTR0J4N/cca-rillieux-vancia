<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  count: string | number
  countLabel?: string
  addLabel: string
  addUrl: string
}>()
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour au tableau de bord</NuxtLink>
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginTop: '12px' }">
      <div>
        <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500' }">{{ title }}</h1>
        <p :style="{ marginTop: '6px', color: 'var(--ink-2)', fontSize: '14px' }">{{ subtitle }}</p>
      </div>
      <div :style="{ display: 'flex', alignItems: 'center', gap: '12px' }">
        <span class="cca-pill cca-pill--neutral">{{ count }} {{ countLabel }}</span>
        <NuxtLink :to="addUrl" class="cca-btn cca-btn--primary">+ {{ addLabel }}</NuxtLink>
      </div>
    </div>
  </header>
</template>
