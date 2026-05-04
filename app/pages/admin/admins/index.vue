<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const { user } = useUserSession()
const { data: admins, refresh } = await useFetch("/api/admins")
const deleteTarget = ref<{ id: number; username: string } | null>(null)
const deleting = ref(false)

async function confirmDelete() {
  if (!deleteTarget.value) return
  deleting.value = true
  await $fetch(`/api/admins/${deleteTarget.value.id}`, { method: "DELETE" })
  deleteTarget.value = null
  deleting.value = false
  refresh()
}
</script>

<template>
  <AdminManagerHeader
    title="Gestion des admins"
    subtitle="Personnes ayant accès à l'espace de gestion."
    :count="admins?.length ?? 0"
    count-label="admins"
    add-label="Nouvel admin"
    add-url="/admin/admins/new"
  />

  <div class="cca-card" :style="{ overflow: 'hidden' }">
    <table :style="{ width: '100%', borderCollapse: 'collapse' }">
      <thead>
        <tr :style="{ background: 'var(--surface-2)', borderBottom: '1px solid var(--line)' }">
          <th :style="{ textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Nom</th>
          <th :style="{ width: '200px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Rôle</th>
          <th :style="{ width: '200px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Dernière connexion</th>
          <th :style="{ width: '200px', textAlign: 'right', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, i) in admins" :key="a.id" :style="{ borderBottom: i === (admins?.length ?? 0) - 1 ? 'none' : '1px solid var(--line)' }">
          <td :style="{ padding: '16px 22px' }">
            <div :style="{ display: 'flex', alignItems: 'center', gap: '12px' }">
              <div :style="{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--forest-soft)', color: 'var(--forest)', display: 'grid', placeItems: 'center', fontSize: '13px', fontWeight: '600' }">
                {{ a.username.slice(0, 2).toUpperCase() }}
              </div>
              <span :style="{ fontWeight: '500' }">{{ a.username }}</span>
            </div>
          </td>
          <td :style="{ padding: '16px 12px' }">
            <span v-if="a.role === 'SUPER_ADMIN'" class="cca-pill" :style="{ background: 'var(--terracotta-soft)', color: 'var(--terracotta-deep)' }">👑 Super-admin</span>
            <span v-else class="cca-pill cca-pill--neutral">Admin</span>
          </td>
          <td :style="{ padding: '16px 12px', fontSize: '13px', color: 'var(--ink-3)' }">
            {{ a.lastLoginAt ? new Date(a.lastLoginAt).toLocaleDateString('fr-FR') : 'Jamais' }}
          </td>
          <td :style="{ padding: '12px 22px' }">
            <div :style="{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }">
              <NuxtLink v-if="user?.role === 'SUPER_ADMIN'" :to="`/admin/admins/${a.id}`" class="cca-btn cca-btn--secondary cca-btn--sm">✎ Modifier</NuxtLink>
              <button
                v-if="user?.role === 'SUPER_ADMIN' && a.id !== user?.id"
                class="cca-btn cca-btn--sm"
                :style="{ background: 'var(--danger-soft)', color: 'var(--danger)' }"
                @click="deleteTarget = { id: a.id, username: a.username }"
              >✕</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <AdminDeleteModal v-if="deleteTarget" :label="deleteTarget.username" :loading="deleting" @confirm="confirmDelete" @cancel="deleteTarget = null" />
</template>
