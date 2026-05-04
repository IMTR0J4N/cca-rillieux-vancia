<script setup lang="ts">
const route = useRoute()
const { user, clear } = useUserSession()

const navItems = [
  { name: "Tableau de bord", icon: "▦", url: "/admin" },
  { name: "Actualités", icon: "✦", url: "/admin/posts" },
  { name: "Tarifs", icon: "€", url: "/admin/pricing" },
  { name: "Horaires", icon: "◷", url: "/admin/schedules" },
  { name: "Équipe", icon: "♟", url: "/admin/members" },
  { name: "Admins", icon: "🛡", url: "/admin/admins" },
]

function isActive(url: string) {
  if (url === "/admin") return route.path === "/admin"
  return route.path.startsWith(url)
}

async function logout() {
  await $fetch("/api/auth/logout", { method: "POST" })
  await clear()
  navigateTo("/admin/login")
}

const initials = computed(() =>
  user.value?.username.slice(0, 2).toUpperCase() ?? "??"
)
</script>

<template>
  <div :style="{ background: 'var(--bg)', display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: '100vh' }">
    <aside :style="{
      background: 'var(--forest-deep)', color: '#e7e0d2',
      padding: '28px 22px', display: 'flex', flexDirection: 'column', gap: '24px',
      position: 'sticky', top: '0', alignSelf: 'start', minHeight: '100vh',
    }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '12px' }">
        <div :style="{
          width: '40px', height: '40px', background: 'rgba(255,255,255,.1)',
          borderRadius: '50%', display: 'grid', placeItems: 'center',
        }">
          <img src="/assets/logo.svg" alt="CCA" style="width:100%;height:100%;filter:brightness(0)invert(1)" />
        </div>
        <div>
          <div :style="{ fontFamily: 'var(--font-display)', fontSize: '16px', color: '#fbf7ef', fontWeight: '500' }">Admin</div>
          <div :style="{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c8c0a8' }">CCA Vancia</div>
        </div>
      </div>

      <nav :style="{ display: 'flex', flexDirection: 'column', gap: '2px' }">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.url"
          :style="{
            padding: '10px 12px',
            fontSize: '14px',
            borderRadius: 'var(--r-sm)',
            display: 'flex', alignItems: 'center', gap: '12px',
            background: isActive(item.url) ? 'rgba(255,255,255,.1)' : 'transparent',
            color: isActive(item.url) ? '#fbf7ef' : '#c8c0a8',
            fontWeight: isActive(item.url) ? '600' : '500',
          }"
        >
          <span :style="{ width: '18px', opacity: '0.85', fontSize: '13px' }">{{ item.icon }}</span>
          {{ item.name }}
        </NuxtLink>
      </nav>

      <div :style="{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,.1)' }">
        <div :style="{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 4px' }">
          <div :style="{
            width: '32px', height: '32px', background: 'var(--terracotta)', borderRadius: '50%',
            display: 'grid', placeItems: 'center', color: '#fbf7ef', fontWeight: '600', fontSize: '13px',
          }">{{ initials }}</div>
          <div :style="{ fontSize: '13px', lineHeight: '1.2' }">
            <div :style="{ color: '#fbf7ef' }">{{ user?.username }}</div>
            <div :style="{ color: '#c8c0a8', fontSize: '11px' }">
              {{ user?.role === 'SUPER_ADMIN' ? '👑 Super-admin' : 'Admin' }}
            </div>
          </div>
        </div>
        <button
          @click="logout"
          :style="{ display: 'block', marginTop: '8px', padding: '8px 12px', fontSize: '13px', color: '#c8c0a8', borderRadius: 'var(--r-sm)', width: '100%', textAlign: 'left', cursor: 'pointer', background: 'none', border: 'none' }"
        >
          ↪ Déconnexion
        </button>
      </div>
    </aside>

    <main :style="{ padding: '32px 40px', overflow: 'auto' }">
      <slot />
    </main>
  </div>
</template>
