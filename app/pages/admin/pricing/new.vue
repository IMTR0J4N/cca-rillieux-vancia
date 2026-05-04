<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const { data: pricing } = await useFetch("/api/pricing")
const form = reactive({ label: "", firstDog: 0, secondDog: 0, perDog: 0, position: 1 })
const loading = ref(false)

const maxPosition = computed(() => (pricing.value?.length ?? 0) + 1)

async function submit() {
  loading.value = true
  try {
    await $fetch("/api/pricing", { method: "POST", body: form })
    navigateTo("/admin/pricing")
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin/pricing" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour à la liste</NuxtLink>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500', marginTop: '12px' }">Nouveau tarif</h1>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }">
    <div class="cca-card" :style="{ padding: '36px' }">
      <form @submit.prevent="submit" :style="{ display: 'flex', flexDirection: 'column', gap: '18px' }">
        <div class="cca-field">
          <label>Nom de la formule</label>
          <input v-model="form.label" class="cca-input" placeholder="Sociétaire 1ère année" required />
        </div>
        <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }">
          <div class="cca-field">
            <label>1er chien (€)</label>
            <input v-model.number="form.firstDog" type="number" min="0" step="0.01" class="cca-input" required />
          </div>
          <div class="cca-field">
            <label>2ème chien (€)</label>
            <input v-model.number="form.secondDog" type="number" min="0" step="0.01" class="cca-input" required />
          </div>
          <div class="cca-field">
            <label>Licence par chien (€)</label>
            <input v-model.number="form.perDog" type="number" min="0" step="0.01" class="cca-input" required />
          </div>
        </div>
        <div class="cca-field">
          <label>Position</label>
          <select v-model="form.position" class="cca-select">
            <option v-for="n in maxPosition" :key="n" :value="n">Position {{ n }}</option>
          </select>
        </div>
        <div :style="{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid var(--line)' }">
          <NuxtLink to="/admin/pricing" class="cca-btn cca-btn--ghost">Annuler</NuxtLink>
          <button type="submit" class="cca-btn cca-btn--primary" :disabled="loading">{{ loading ? 'Création...' : 'Créer le tarif' }}</button>
        </div>
      </form>
    </div>
    <aside class="cca-card" :style="{ padding: '24px', background: 'var(--surface-2)' }">
      <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '500' }">💡 Conseils</h3>
      <ul :style="{ marginTop: '12px', fontSize: '13px', lineHeight: '1.6', color: 'var(--ink-2)', display: 'flex', flexDirection: 'column', gap: '10px' }">
        <li>• Maximum recommandé : 4 formules.</li>
        <li>• La 1ère formule est mise en avant visuellement.</li>
      </ul>
    </aside>
  </div>
</template>
