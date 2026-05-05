<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const route = useRoute()
const id = Number(route.params.id)

const { data: s } = await useFetch(`/api/schedules/${id}`)

const form = reactive({
  timeOfDay: (s.value?.timeOfDay ?? "MORNING") as "MORNING" | "AFTERNOON",
  slot: s.value?.slot ?? "",
  label: s.value?.label ?? "",
})
const loading = ref(false)
const deleteTarget = ref(false)
const deleting = ref(false)

async function submit() {
  loading.value = true
  try {
    await $fetch(`/api/schedules/${id}`, { method: "PUT", body: form })
    navigateTo("/admin/schedules")
  } finally {
    loading.value = false
  }
}

async function confirmDelete() {
  deleting.value = true
  await $fetch(`/api/schedules/${id}`, { method: "DELETE" })
  navigateTo("/admin/schedules")
}
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin/schedules" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour à la liste</NuxtLink>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500', marginTop: '12px' }">Modifier le créneau</h1>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }">
    <div class="cca-card" :style="{ padding: '36px' }">
      <form @submit.prevent="submit" :style="{ display: 'flex', flexDirection: 'column', gap: '18px' }">
        <div class="cca-field">
          <label>Moment de la journée</label>
          <div :style="{ display: 'flex', gap: '8px' }">
            <button
              v-for="opt in [{ value: 'MORNING', label: 'Matin' }, { value: 'AFTERNOON', label: 'Après-midi' }]"
              :key="opt.value"
              type="button"
              @click="form.timeOfDay = opt.value as 'MORNING' | 'AFTERNOON'"
              :style="{
                flex: '1', padding: '12px 16px', borderRadius: 'var(--r-md)',
                background: form.timeOfDay === opt.value ? 'var(--forest)' : 'var(--surface-2)',
                color: form.timeOfDay === opt.value ? '#fbf7ef' : 'var(--ink-2)',
                border: form.timeOfDay === opt.value ? 'none' : '1px solid var(--line)',
                fontWeight: '500', fontFamily: 'inherit', cursor: 'pointer',
              }"
            >{{ opt.label }}</button>
          </div>
        </div>
        <div class="cca-field">
          <label>Heure</label>
          <input v-model="form.slot" class="cca-input" required />
        </div>
        <div class="cca-field">
          <label>Nom de l'activité</label>
          <input v-model="form.label" class="cca-input" required />
        </div>
        <div :style="{ display: 'flex', gap: '10px', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--line)' }">
          <button type="button" class="cca-btn cca-btn--ghost" :style="{ color: 'var(--danger)' }" @click="deleteTarget = true">✕ Supprimer</button>
          <div :style="{ display: 'flex', gap: '10px' }">
            <NuxtLink to="/admin/schedules" class="cca-btn cca-btn--ghost">Annuler</NuxtLink>
            <button type="submit" class="cca-btn cca-btn--primary" :disabled="loading">{{ loading ? 'Enregistrement...' : 'Enregistrer' }}</button>
          </div>
        </div>
      </form>
    </div>
    <aside class="cca-card" :style="{ padding: '24px', background: 'var(--surface-2)' }">
      <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '500' }">💡 Conseils</h3>
      <ul :style="{ marginTop: '12px', fontSize: '13px', lineHeight: '1.6', color: 'var(--ink-2)', display: 'flex', flexDirection: 'column', gap: '10px' }">
        <li>• Maximum 10 créneaux au total.</li>
        <li>• Format heure recommandé : 09h30, 13h30 / 15h00.</li>
      </ul>
    </aside>
  </div>

  <AdminDeleteModal v-if="deleteTarget" :label="s?.label ?? ''" :loading="deleting" @confirm="confirmDelete" @cancel="deleteTarget = false" />
</template>
