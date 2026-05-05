<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const form = reactive({
  title: "",
  description: "",
  publishedAt: new Date().toISOString().slice(0, 10),
  image: "",
})
const errors = ref<Record<string, string>>({})
const loading = ref(false)

function validate() {
  errors.value = {}
  if (!form.title) errors.value.title = "Le titre est obligatoire."
  if (form.description.length < 20) errors.value.description = `La description doit contenir au moins 20 caractères (actuellement : ${form.description.length}).`
  if (!form.image) errors.value.image = "Une image est obligatoire."
  return Object.keys(errors.value).length === 0
}

async function submit() {
  if (!validate()) return
  loading.value = true
  try {
    await $fetch("/api/posts", {
      method: "POST",
      body: { ...form, publishedAt: new Date(form.publishedAt).toISOString() },
    })
    navigateTo("/admin/posts")
  } catch (e: any) {
    errors.value.global = e.data?.message ?? "Erreur lors de la création."
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin/posts" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour à la liste</NuxtLink>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500', marginTop: '12px' }">Nouvelle actualité</h1>
    <p :style="{ marginTop: '6px', color: 'var(--ink-2)', fontSize: '14px' }">Cette actualité sera mise en avant sur la page d'accueil.</p>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }">
    <div class="cca-card" :style="{ padding: '36px' }">
      <div v-if="errors.global" :style="{ padding: '16px', borderRadius: 'var(--r-md)', background: 'color-mix(in oklab, var(--danger) 8%, var(--surface))', border: '1px solid color-mix(in oklab, var(--danger) 30%, transparent)', display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '18px' }">
        <div :style="{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--danger)', color: '#fbf7ef', display: 'grid', placeItems: 'center', fontWeight: '700', flexShrink: '0' }">!</div>
        <div :style="{ fontWeight: '600', fontSize: '14px', color: 'var(--danger)' }">{{ errors.global }}</div>
      </div>

      <form @submit.prevent="submit" :style="{ display: 'flex', flexDirection: 'column', gap: '18px' }">
        <div class="cca-field">
          <label>Titre de l'actualité</label>
          <input v-model="form.title" class="cca-input" :style="errors.title ? { borderColor: 'var(--danger)' } : {}" placeholder="C'est la rentrée !!!" />
          <div v-if="errors.title" :style="{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', fontSize: '12px', color: 'var(--danger)', fontWeight: '500' }">
            <span :style="{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--danger)', color: '#fbf7ef', display: 'grid', placeItems: 'center', fontSize: '9px', fontWeight: '700' }">!</span>
            {{ errors.title }}
          </div>
        </div>

        <div class="cca-field">
          <label>Description</label>
          <textarea v-model="form.description" class="cca-textarea" :style="errors.description ? { borderColor: 'var(--danger)' } : {}" placeholder="Décrivez l'actualité..." />
          <div v-if="errors.description" :style="{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', fontSize: '12px', color: 'var(--danger)', fontWeight: '500' }">
            <span :style="{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--danger)', color: '#fbf7ef', display: 'grid', placeItems: 'center', fontSize: '9px', fontWeight: '700' }">!</span>
            {{ errors.description }}
          </div>
        </div>

        <div class="cca-field">
          <label>Date de publication</label>
          <input v-model="form.publishedAt" type="date" class="cca-input" />
        </div>

        <AdminFilePicker v-model="form.image" />
        <div v-if="errors.image" :style="{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--danger)', fontWeight: '500' }">
          <span :style="{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--danger)', color: '#fbf7ef', display: 'grid', placeItems: 'center', fontSize: '9px', fontWeight: '700' }">!</span>
          {{ errors.image }}
        </div>

        <div :style="{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid var(--line)' }">
          <NuxtLink to="/admin/posts" class="cca-btn cca-btn--ghost">Annuler</NuxtLink>
          <button type="submit" class="cca-btn cca-btn--primary" :disabled="loading">
            {{ loading ? 'Publication...' : 'Publier l\'actualité' }}
          </button>
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
</template>
