<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const route = useRoute()
const id = Number(route.params.id)

const { data: post } = await useFetch(`/api/posts/${id}`)

const form = reactive({
  title: post.value?.title ?? "",
  description: post.value?.description ?? "",
  publishedAt: post.value?.publishedAt ? new Date(post.value.publishedAt).toISOString().slice(0, 10) : "",
  image: post.value?.image ?? "",
})
const errors = ref<Record<string, string>>({})
const loading = ref(false)
const deleteTarget = ref(false)
const deleting = ref(false)

function validate() {
  errors.value = {}
  if (!form.title) errors.value.title = "Le titre est obligatoire."
  if (form.description.length < 20) errors.value.description = `La description doit contenir au moins 20 caractères.`
  return Object.keys(errors.value).length === 0
}

async function submit() {
  if (!validate()) return
  loading.value = true
  try {
    await $fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: { ...form, publishedAt: new Date(form.publishedAt).toISOString() },
    })
    navigateTo("/admin/posts")
  } catch (e: any) {
    errors.value.global = e.data?.message ?? "Erreur lors de la mise à jour."
  } finally {
    loading.value = false
  }
}

async function confirmDelete() {
  deleting.value = true
  await $fetch(`/api/posts/${id}`, { method: "DELETE" })
  navigateTo("/admin/posts")
}
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin/posts" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour à la liste</NuxtLink>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500', marginTop: '12px' }">Modifier l'actualité</h1>
    <p :style="{ marginTop: '6px', color: 'var(--ink-2)', fontSize: '14px' }">Édition de « {{ post?.title }} »</p>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }">
    <div class="cca-card" :style="{ padding: '36px' }">
      <form @submit.prevent="submit" :style="{ display: 'flex', flexDirection: 'column', gap: '18px' }">
        <div class="cca-field">
          <label>Titre de l'actualité</label>
          <input v-model="form.title" class="cca-input" :style="errors.title ? { borderColor: 'var(--danger)' } : {}" />
        </div>
        <div class="cca-field">
          <label>Description</label>
          <textarea v-model="form.description" class="cca-textarea" :style="errors.description ? { borderColor: 'var(--danger)' } : {}" />
          <div v-if="errors.description" :style="{ fontSize: '12px', color: 'var(--danger)', marginTop: '4px' }">{{ errors.description }}</div>
        </div>
        <div class="cca-field">
          <label>Date de publication</label>
          <input v-model="form.publishedAt" type="date" class="cca-input" />
        </div>
        <AdminFilePicker v-model="form.image" />

        <div :style="{ padding: '14px', borderRadius: 'var(--r-md)', background: 'var(--terracotta-soft)', fontSize: '13px', color: 'var(--terracotta-deep)', display: 'flex', gap: '10px' }">
          <span>⚠</span>
          <span>Les modifications seront visibles immédiatement sur le site.</span>
        </div>

        <div :style="{ display: 'flex', gap: '10px', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--line)' }">
          <button type="button" class="cca-btn cca-btn--ghost" :style="{ color: 'var(--danger)' }" @click="deleteTarget = true">✕ Supprimer</button>
          <div :style="{ display: 'flex', gap: '10px' }">
            <NuxtLink to="/admin/posts" class="cca-btn cca-btn--ghost">Annuler</NuxtLink>
            <button type="submit" class="cca-btn cca-btn--primary" :disabled="loading">
              {{ loading ? 'Enregistrement...' : 'Enregistrer les modifications' }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <aside class="cca-card" :style="{ padding: '24px', background: 'var(--surface-2)' }">
      <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '500' }">💡 Conseils</h3>
      <ul :style="{ marginTop: '12px', fontSize: '13px', lineHeight: '1.6', color: 'var(--ink-2)', display: 'flex', flexDirection: 'column', gap: '10px' }">
        <li>• Privilégiez des images au format paysage (16:9) pour les actualités.</li>
        <li>• Une description courte et directe fonctionne mieux qu'un long texte.</li>
        <li>• Vérifiez l'orthographe avant de publier.</li>
      </ul>
    </aside>
  </div>

  <AdminDeleteModal
    v-if="deleteTarget"
    :label="post?.title ?? ''"
    :loading="deleting"
    @confirm="confirmDelete"
    @cancel="deleteTarget = false"
  />
</template>
