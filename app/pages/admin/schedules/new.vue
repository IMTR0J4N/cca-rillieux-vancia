<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const form = reactive({ timeOfDay: "MORNING" as "MORNING" | "AFTERNOON", slot: "", label: "" })
const loading = ref(false)

async function submit() {
  loading.value = true
  try {
    await $fetch("/api/schedules", { method: "POST", body: form })
    navigateTo("/admin/schedules")
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin/schedules" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour à la liste</NuxtLink>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500', marginTop: '12px' }">Nouveau créneau</h1>
    <p :style="{ marginTop: '6px', color: 'var(--ink-2)', fontSize: '14px' }">Ajoutez un créneau au planning du samedi.</p>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }">
    <div class="cca-card" :style="{ padding: '36px' }">
      <form @submit.prevent="submit" :style="{ display: 'flex', flexDirection: 'column', gap: '18px' }">
        <div class="cca-field">
          <label>Moment de la journée</label>
          <div :style="{ display: 'flex', gap: '8px' }">
            <button
              v-for="(opt, i) in [{ value: 'MORNING', label: 'Matin' }, { value: 'AFTERNOON', label: 'Après-midi' }]"
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
          <input v-model="form.slot" class="cca-input" placeholder="09h30" required />
        </div>
        <div class="cca-field">
          <label>Nom de l'activité</label>
          <input v-model="form.label" class="cca-input" placeholder="Sauvetage (test préalable...)" required />
        </div>
        <div :style="{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid var(--line)' }">
          <NuxtLink to="/admin/schedules" class="cca-btn cca-btn--ghost">Annuler</NuxtLink>
          <button type="submit" class="cca-btn cca-btn--primary" :disabled="loading">{{ loading ? 'Création...' : 'Créer le créneau' }}</button>
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
</template>
