<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const route = useRoute()
const id = Number(route.params.id)

const { data: member } = await useFetch(`/api/members/${id}`)
const { data: members } = await useFetch("/api/members")

const form = reactive({
  name: member.value?.name ?? "",
  description: member.value?.description ?? "",
  photo: member.value?.photo ?? "",
  position: member.value?.position ?? 1,
})
const loading = ref(false)
const deleteTarget = ref(false)
const deleting = ref(false)

const maxPosition = computed(() => members.value?.length ?? 1)

async function submit() {
  loading.value = true
  try {
    await $fetch(`/api/members/${id}`, { method: "PUT", body: form })
    navigateTo("/admin/members")
  } finally {
    loading.value = false
  }
}

async function confirmDelete() {
  deleting.value = true
  await $fetch(`/api/members/${id}`, { method: "DELETE" })
  navigateTo("/admin/members")
}
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin/members" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour à la liste</NuxtLink>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500', marginTop: '12px' }">Modifier le membre</h1>
    <p :style="{ marginTop: '6px', color: 'var(--ink-2)', fontSize: '14px' }">Édition de la fiche de {{ member?.name }}</p>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }">
    <div class="cca-card" :style="{ padding: '36px' }">
      <form @submit.prevent="submit" :style="{ display: 'flex', flexDirection: 'column', gap: '18px' }">
        <div :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }">
          <div class="cca-field">
            <label>Nom</label>
            <input v-model="form.name" class="cca-input" />
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
          <textarea v-model="form.description" class="cca-textarea" />
        </div>
        <AdminFilePicker v-model="form.photo" />
        <div :style="{ display: 'flex', gap: '10px', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--line)' }">
          <button type="button" class="cca-btn cca-btn--ghost" :style="{ color: 'var(--danger)' }" @click="deleteTarget = true">✕ Supprimer</button>
          <div :style="{ display: 'flex', gap: '10px' }">
            <NuxtLink to="/admin/members" class="cca-btn cca-btn--ghost">Annuler</NuxtLink>
            <button type="submit" class="cca-btn cca-btn--primary" :disabled="loading">{{ loading ? 'Enregistrement...' : 'Enregistrer' }}</button>
          </div>
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

  <AdminDeleteModal
    v-if="deleteTarget"
    :label="member?.name ?? ''"
    :loading="deleting"
    @confirm="confirmDelete"
    @cancel="deleteTarget = false"
  />
</template>
