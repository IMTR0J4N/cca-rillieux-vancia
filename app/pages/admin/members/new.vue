<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const { data: members } = await useFetch("/api/members")

const form = reactive({ name: "", description: "", photo: "", position: 1 })
const errors = ref<Record<string, string>>({})
const loading = ref(false)

const maxPosition = computed(() => (members.value?.length ?? 0) + 1)

function validate() {
  errors.value = {}
  if (!form.name) errors.value.name = "Le nom est obligatoire."
  if (!form.description) errors.value.description = "La description est obligatoire."
  if (!form.photo) errors.value.photo = "Une photo est obligatoire."
  return Object.keys(errors.value).length === 0
}

async function submit() {
  if (!validate()) return
  loading.value = true
  try {
    await $fetch("/api/members", { method: "POST", body: form })
    navigateTo("/admin/members")
  } catch (e: any) {
    errors.value.global = e.data?.message ?? "Erreur."
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin/members" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour à la liste</NuxtLink>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500', marginTop: '12px' }">Nouveau membre d'équipe</h1>
    <p :style="{ marginTop: '6px', color: 'var(--ink-2)', fontSize: '14px' }">Cette personne apparaîtra sur la page L'équipe.</p>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }">
    <div class="cca-card" :style="{ padding: '36px' }">
      <form @submit.prevent="submit" :style="{ display: 'flex', flexDirection: 'column', gap: '18px' }">
        <div :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }">
          <div class="cca-field">
            <label>Nom</label>
            <input v-model="form.name" class="cca-input" placeholder="Prénom" />
            <div v-if="errors.name" :style="{ fontSize: '12px', color: 'var(--danger)', marginTop: '4px' }">{{ errors.name }}</div>
          </div>
          <div class="cca-field">
            <label>Position dans la liste</label>
            <select v-model="form.position" class="cca-select">
              <option v-for="n in maxPosition" :key="n" :value="n">Position {{ n }}</option>
            </select>
          </div>
        </div>
        <div class="cca-field">
          <label>Description / Rôle</label>
          <textarea v-model="form.description" class="cca-textarea" placeholder="Rôle au club, qualités, anecdotes..." />
          <div v-if="errors.description" :style="{ fontSize: '12px', color: 'var(--danger)', marginTop: '4px' }">{{ errors.description }}</div>
        </div>
        <AdminFilePicker v-model="form.photo" />
        <div v-if="errors.photo" :style="{ fontSize: '12px', color: 'var(--danger)' }">{{ errors.photo }}</div>
        <div :style="{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid var(--line)' }">
          <NuxtLink to="/admin/members" class="cca-btn cca-btn--ghost">Annuler</NuxtLink>
          <button type="submit" class="cca-btn cca-btn--primary" :disabled="loading">{{ loading ? 'Ajout...' : 'Ajouter le membre' }}</button>
        </div>
      </form>
    </div>
    <aside class="cca-card" :style="{ padding: '24px', background: 'var(--surface-2)' }">
      <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '500' }">💡 Conseils</h3>
      <ul :style="{ marginTop: '12px', fontSize: '13px', lineHeight: '1.6', color: 'var(--ink-2)', display: 'flex', flexDirection: 'column', gap: '10px' }">
        <li>• Utilisez une photo carrée ou proche du format carré.</li>
        <li>• La description peut mentionner le rôle, l'ancienneté ou une anecdote.</li>
      </ul>
    </aside>
  </div>
</template>
