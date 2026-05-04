<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const { user } = useUserSession()

const { data: posts } = await useFetch("/api/posts")
const { data: members } = await useFetch("/api/members")
const { data: pricing } = await useFetch("/api/pricing")
const { data: schedules } = await useFetch("/api/schedules")
const { data: admins } = await useFetch("/api/admins")

const cards = computed(() => [
  { title: "Actualités", count: posts.value?.length ?? 0, icon: "✦", color: "var(--terracotta)", url: "/admin/posts" },
  { title: "Tarifs", count: pricing.value?.length ?? 0, icon: "€", color: "var(--forest)", url: "/admin/pricing" },
  { title: "Horaires", count: schedules.value?.length ?? 0, max: 10, icon: "◷", color: "var(--terracotta)", url: "/admin/schedules" },
  { title: "Équipe", count: members.value?.length ?? 0, max: 50, icon: "♟", color: "var(--forest)", url: "/admin/members" },
  { title: "Admins", count: admins.value?.length ?? 0, icon: "🛡", color: "var(--terracotta)", url: "/admin/admins" },
])
</script>

<template>
  <header :style="{ marginBottom: '32px' }">
    <div class="cca-eyebrow">Espace admin</div>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '40px', marginTop: '8px', fontWeight: '500' }">
      Bonjour {{ user?.username }} 👋
    </h1>
    <p :style="{ marginTop: '8px', color: 'var(--ink-2)' }">Gérez le contenu du site depuis cet espace.</p>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }">
    <NuxtLink
      v-for="c in cards"
      :key="c.title"
      :to="c.url"
      class="cca-card"
      :style="{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'pointer', minHeight: '180px' }"
    >
      <div :style="{
        width: '44px', height: '44px', borderRadius: 'var(--r-md)',
        background: `color-mix(in oklab, ${c.color} 15%, transparent)`,
        color: c.color, display: 'grid', placeItems: 'center', fontSize: '20px',
      }">{{ c.icon }}</div>
      <div :style="{ marginTop: 'auto' }">
        <div :style="{ fontSize: '13px', color: 'var(--ink-3)', fontWeight: '500' }">Gestion des</div>
        <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '24px', marginTop: '4px', fontWeight: '500' }">{{ c.title }}</h3>
        <div :style="{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }">
          <span :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500' }">
            {{ c.count }}<span v-if="c.max" :style="{ fontSize: '14px', color: 'var(--ink-3)', fontWeight: '400' }"> / {{ c.max }}</span>
          </span>
          <span :style="{ fontSize: '13px', color: 'var(--forest)', fontWeight: '600' }">Gérer →</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
