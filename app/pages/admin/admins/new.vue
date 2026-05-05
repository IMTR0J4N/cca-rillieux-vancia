<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const form = reactive({ username: "", password: "", confirmPassword: "", role: "ADMIN" as "ADMIN" | "SUPER_ADMIN" })
const errors = ref<Record<string, string>>({})
const loading = ref(false)

function validate() {
  errors.value = {}
  if (!form.username) errors.value.username = "Le nom est obligatoire."
  if (form.password.length < 8) errors.value.password = "Minimum 8 caractères."
  if (form.password !== form.confirmPassword) errors.value.confirmPassword = "Les mots de passe ne correspondent pas."
  return Object.keys(errors.value).length === 0
}

async function submit() {
  if (!validate()) return
  loading.value = true
  try {
    await $fetch("/api/admins", { method: "POST", body: { username: form.username, password: form.password, role: form.role } })
    navigateTo("/admin/admins")
  } catch (e: any) {
    errors.value.global = e.data?.message ?? "Erreur."
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin/admins" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour à la liste</NuxtLink>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500', marginTop: '12px' }">Nouvel admin</h1>
    <p :style="{ marginTop: '6px', color: 'var(--ink-2)', fontSize: '14px' }">Cette personne aura accès à l'espace de gestion.</p>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }">
    <div class="cca-card" :style="{ padding: '36px' }">
      <form @submit.prevent="submit" :style="{ display: 'flex', flexDirection: 'column', gap: '18px' }">
        <div class="cca-field">
          <label>Nom de l'admin</label>
          <input v-model="form.username" class="cca-input" placeholder="Prénom" required />
          <div v-if="errors.username" :style="{ fontSize: '12px', color: 'var(--danger)', marginTop: '4px' }">{{ errors.username }}</div>
        </div>
        <div class="cca-field">
          <label>Mot de passe</label>
          <input v-model="form.password" type="password" class="cca-input" placeholder="••••••••" />
          <small :style="{ fontSize: '12px', color: 'var(--ink-3)' }">Minimum 8 caractères.</small>
          <div v-if="errors.password" :style="{ fontSize: '12px', color: 'var(--danger)', marginTop: '4px' }">{{ errors.password }}</div>
        </div>
        <div class="cca-field">
          <label>Confirmation du mot de passe</label>
          <input v-model="form.confirmPassword" type="password" class="cca-input" placeholder="••••••••" />
          <div v-if="errors.confirmPassword" :style="{ fontSize: '12px', color: 'var(--danger)', marginTop: '4px' }">{{ errors.confirmPassword }}</div>
        </div>
        <div class="cca-field">
          <label>Rôle</label>
          <div :style="{ display: 'grid', gap: '10px' }">
            <label
              v-for="opt in [{ value: 'ADMIN', label: 'Admin', desc: 'Peut gérer le contenu (actualités, équipe, tarifs, horaires).' }, { value: 'SUPER_ADMIN', label: '👑 Super-admin', desc: 'Peut en plus créer, modifier et supprimer les autres admins.' }]"
              :key="opt.value"
              :style="{
                display: 'flex', gap: '12px', alignItems: 'flex-start',
                padding: '14px', borderRadius: 'var(--r-md)',
                background: form.role === opt.value ? 'var(--forest-soft)' : 'var(--surface-2)',
                border: form.role === opt.value ? '1.5px solid var(--forest)' : '1px solid var(--line)',
                cursor: 'pointer',
              }"
            >
              <input type="radio" name="role" :value="opt.value" v-model="form.role" :style="{ marginTop: '3px' }" />
              <div>
                <div :style="{ fontWeight: '600', fontSize: '14px' }">{{ opt.label }}</div>
                <div :style="{ fontSize: '12px', color: 'var(--ink-3)', marginTop: '2px' }">{{ opt.desc }}</div>
              </div>
            </label>
          </div>
        </div>
        <div :style="{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid var(--line)' }">
          <NuxtLink to="/admin/admins" class="cca-btn cca-btn--ghost">Annuler</NuxtLink>
          <button type="submit" class="cca-btn cca-btn--primary" :disabled="loading">{{ loading ? 'Création...' : "Créer l'admin" }}</button>
        </div>
      </form>
    </div>
    <aside class="cca-card" :style="{ padding: '24px', background: 'var(--surface-2)' }">
      <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '500' }">💡 Conseils</h3>
      <ul :style="{ marginTop: '12px', fontSize: '13px', lineHeight: '1.6', color: 'var(--ink-2)', display: 'flex', flexDirection: 'column', gap: '10px' }">
        <li>• Seuls les super-admins peuvent créer d'autres admins.</li>
        <li>• Communiquez le mot de passe en privé.</li>
      </ul>
    </aside>
  </div>
</template>
