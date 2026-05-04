<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const { data: members, refresh } = await useFetch("/api/members")
const deleteTarget = ref<{ id: number; name: string } | null>(null)
const deleting = ref(false)

async function confirmDelete() {
  if (!deleteTarget.value) return
  deleting.value = true
  await $fetch(`/api/members/${deleteTarget.value.id}`, { method: "DELETE" })
  deleteTarget.value = null
  deleting.value = false
  refresh()
}
</script>

<template>
  <AdminManagerHeader
    title="Gestion de l'équipe"
    subtitle="Membres affichés sur la page L'équipe."
    :count="`${members?.length ?? 0} sur 50`"
    add-label="Nouveau membre"
    add-url="/admin/members/new"
  />

  <div class="cca-card" :style="{ overflow: 'hidden' }">
    <table :style="{ width: '100%', borderCollapse: 'collapse' }">
      <thead>
        <tr :style="{ background: 'var(--surface-2)', borderBottom: '1px solid var(--line)' }">
          <th :style="{ width: '70px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">#</th>
          <th :style="{ width: '80px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }"></th>
          <th :style="{ textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Nom</th>
          <th :style="{ width: '200px', textAlign: 'right', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(m, i) in members"
          :key="m.id"
          :style="{ borderBottom: i === (members?.length ?? 0) - 1 ? 'none' : '1px solid var(--line)' }"
        >
          <td :style="{ padding: '12px 22px', color: 'var(--ink-3)', fontSize: '13px', fontFamily: 'var(--font-mono)' }">
            {{ String(m.position).padStart(2, '0') }}
          </td>
          <td :style="{ padding: '12px 0' }">
            <div :style="{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', background: 'var(--surface-2)' }">
              <AppImage :src="m.photo ? `/uploads/${m.photo}` : null" :label="m.name" />
            </div>
          </td>
          <td :style="{ padding: '16px 12px', fontWeight: '500' }">{{ m.name }}</td>
          <td :style="{ padding: '12px 22px' }">
            <div :style="{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }">
              <NuxtLink :to="`/admin/members/${m.id}`" class="cca-btn cca-btn--secondary cca-btn--sm">✎ Modifier</NuxtLink>
              <button class="cca-btn cca-btn--sm" :style="{ background: 'var(--danger-soft)', color: 'var(--danger)' }" @click="deleteTarget = { id: m.id, name: m.name }">✕</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <AdminDeleteModal
    v-if="deleteTarget"
    :label="deleteTarget.name"
    :loading="deleting"
    @confirm="confirmDelete"
    @cancel="deleteTarget = null"
  />
</template>
