<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const { data: schedules, refresh } = await useFetch("/api/schedules")
const deleteTarget = ref<{ id: number; label: string } | null>(null)
const deleting = ref(false)

async function confirmDelete() {
  if (!deleteTarget.value) return
  deleting.value = true
  await $fetch(`/api/schedules/${deleteTarget.value.id}`, { method: "DELETE" })
  deleteTarget.value = null
  deleting.value = false
  refresh()
}
</script>

<template>
  <AdminManagerHeader
    title="Gestion des horaires"
    subtitle="Planning du samedi."
    :count="`${schedules?.length ?? 0} sur 10`"
    add-label="Nouveau créneau"
    add-url="/admin/schedules/new"
  />

  <div class="cca-card" :style="{ overflow: 'hidden' }">
    <table :style="{ width: '100%', borderCollapse: 'collapse' }">
      <thead>
        <tr :style="{ background: 'var(--surface-2)', borderBottom: '1px solid var(--line)' }">
          <th :style="{ width: '130px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Moment</th>
          <th :style="{ width: '160px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Heure</th>
          <th :style="{ textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Activité</th>
          <th :style="{ width: '200px', textAlign: 'right', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, i) in schedules" :key="s.id" :style="{ borderBottom: i === (schedules?.length ?? 0) - 1 ? 'none' : '1px solid var(--line)' }">
          <td :style="{ padding: '16px 22px' }">
            <span class="cca-pill" :style="{
              background: s.timeOfDay === 'MORNING' ? 'var(--terracotta-soft)' : 'var(--forest-soft)',
              color: s.timeOfDay === 'MORNING' ? 'var(--terracotta-deep)' : 'var(--forest-deep)',
            }">{{ s.timeOfDay === 'MORNING' ? 'Matin' : 'Après-midi' }}</span>
          </td>
          <td :style="{ padding: '16px 12px', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '600' }">{{ s.slot }}</td>
          <td :style="{ padding: '16px 12px', fontSize: '14px' }">{{ s.label }}</td>
          <td :style="{ padding: '12px 22px' }">
            <div :style="{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }">
              <NuxtLink :to="`/admin/schedules/${s.id}`" class="cca-btn cca-btn--secondary cca-btn--sm">✎ Modifier</NuxtLink>
              <button class="cca-btn cca-btn--sm" :style="{ background: 'var(--danger-soft)', color: 'var(--danger)' }" @click="deleteTarget = { id: s.id, label: s.label }">✕</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <AdminDeleteModal v-if="deleteTarget" :label="deleteTarget.label" :loading="deleting" @confirm="confirmDelete" @cancel="deleteTarget = null" />
</template>
