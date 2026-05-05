<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const { data: pricing, refresh } = await useFetch("/api/pricing")
const deleteTarget = ref<{ id: number; label: string } | null>(null)
const deleting = ref(false)

async function confirmDelete() {
  if (!deleteTarget.value) return
  deleting.value = true
  await $fetch(`/api/pricing/${deleteTarget.value.id}`, { method: "DELETE" })
  deleteTarget.value = null
  deleting.value = false
  refresh()
}
</script>

<template>
  <AdminManagerHeader
    title="Gestion des tarifs"
    subtitle="Tarifs affichés sur la page publique."
    :count="pricing?.length ?? 0"
    count-label="formules"
    add-label="Nouveau tarif"
    add-url="/admin/pricing/new"
  />

  <div class="cca-card" :style="{ overflow: 'hidden' }">
    <table :style="{ width: '100%', borderCollapse: 'collapse' }">
      <thead>
        <tr :style="{ background: 'var(--surface-2)', borderBottom: '1px solid var(--line)' }">
          <th :style="{ textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Nom</th>
          <th :style="{ width: '130px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">1er chien</th>
          <th :style="{ width: '130px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">2ème chien</th>
          <th :style="{ width: '130px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Licence</th>
          <th :style="{ width: '200px', textAlign: 'right', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in pricing" :key="p.id" :style="{ borderBottom: i === (pricing?.length ?? 0) - 1 ? 'none' : '1px solid var(--line)' }">
          <td :style="{ padding: '18px 22px', fontWeight: '500' }">{{ p.label }}</td>
          <td :style="{ padding: '18px 12px', fontFamily: 'var(--font-display)', fontSize: '18px' }">{{ Number(p.firstDog) }} €</td>
          <td :style="{ padding: '18px 12px', fontFamily: 'var(--font-display)', fontSize: '18px' }">{{ Number(p.secondDog) }} €</td>
          <td :style="{ padding: '18px 12px', fontFamily: 'var(--font-display)', fontSize: '18px' }">{{ Number(p.perDog) }} €</td>
          <td :style="{ padding: '12px 22px' }">
            <div :style="{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }">
              <NuxtLink :to="`/admin/pricing/${p.id}`" class="cca-btn cca-btn--secondary cca-btn--sm">✎ Modifier</NuxtLink>
              <button class="cca-btn cca-btn--sm" :style="{ background: 'var(--danger-soft)', color: 'var(--danger)' }" @click="deleteTarget = { id: p.id, label: p.label }">✕</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <AdminDeleteModal v-if="deleteTarget" :label="deleteTarget.label" :loading="deleting" @confirm="confirmDelete" @cancel="deleteTarget = null" />
</template>
