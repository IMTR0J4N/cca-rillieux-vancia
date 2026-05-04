<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const route = useRoute()
const id = Number(route.params.id)

const { data: a } = await useFetch(`/api/admins/${id}`)

const form = reactive({
  username: a.value?.username ?? "",
  password: "",
  role: (a.value?.role ?? "ADMIN") as "ADMIN" | "SUPER_ADMIN",
})
const loading = ref(false)
const deleteTarget = ref(false)
const deleting = ref(false)

async function submit() {
  loading.value = true
  const body: Record<string, unknown> = { username: form.username, role: form.role }
  if (form.password) body.password = form.password
  try {
    await $fetch(`/api/admins/${id}`, { method: "PUT", body })
    navigateTo("/admin/admins")
  } finally {
    loading.value = false
  }
}

async function confirmDelete() {
  deleting.value = true
  await $fetch(`/api/admins/${id}`, { method: "DELETE" })
  navigateTo("/admin/admins")
}
</script>

<template>
  <header :style="{ marginBottom: '24px' }">
    <NuxtLink to="/admin/admins" :style="{ fontSize: '13px', color: 'var(--ink-3)' }">← Retour à la liste</NuxtLink>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500', marginTop: '12px' }">Modifier l'admin</h1>
    <p :style="{ marginTop: '6px', color: 'var(--ink-2)', fontSize: '14px' }">Édition du compte de {{ a?.username }}</p>
  </header>

  <div :style="{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }">
    <div class="cca-card" :style="{ padding: '36px' }">
      <form @submit.prevent="submit" :style="{ display: 'flex', flexDirection: 'column', gap: '18px' }">
        <div class="cca-field">
          <label>Nom de l'admin</label>
          <input v-model="form.username" class="cca-input" required />
        </div>
        <div class="cca-field">
          <label>Mot de passe</label>
          <input v-model="form.password" type="password" class="cca-input" placeholder="Laisser vide pour conserver le mot de passe actuel" />
          <small :style="{ fontSize: '12px', color: 'var(--ink-3)' }">Renseignez ce champ uniquement pour réinitialiser le mot de passe.</small>
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
        <div :style="{ padding: '14px', borderRadius: 'var(--r-md)', background: 'var(--surface-2)', fontSize: '13px', color: 'var(--ink-3)' }">
          Dernière connexion : <strong :style="{ color: 'var(--ink)' }">{{ a?.lastLoginAt ? new Date(a.lastLoginAt).toLocaleDateString('fr-FR') : 'Jamais' }}</strong>
        </div>
        <div :style="{ display: 'flex', gap: '10px', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--line)' }">
          <button type="button" class="cca-btn cca-btn--ghost" :style="{ color: 'var(--danger)' }" @click="deleteTarget = true">✕ Supprimer le compte</button>
          <div :style="{ display: 'flex', gap: '10px' }">
            <NuxtLink to="/admin/admins" class="cca-btn cca-btn--ghost">Annuler</NuxtLink>
            <button type="submit" class="cca-btn cca-btn--primary" :disabled="loading">{{ loading ? 'Enregistrement...' : 'Enregistrer' }}</button>
          </div>
        </div>
      </form>
    </div>
    <aside class="cca-card" :style="{ padding: '24px', background: 'var(--surface-2)' }">
      <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '500' }">💡 Conseils</h3>
      <ul :style="{ marginTop: '12px', fontSize: '13px', lineHeight: '1.6', color: 'var(--ink-2)', display: 'flex', flexDirection: 'column', gap: '10px' }">
        <li>• Seuls les super-admins peuvent modifier des comptes.</li>
        <li>• Vous ne pouvez pas supprimer votre propre compte.</li>
      </ul>
    </aside>
  </div>

  <AdminDeleteModal v-if="deleteTarget" :label="a?.username ?? ''" :loading="deleting" @confirm="confirmDelete" @cancel="deleteTarget = false" />
</template>
