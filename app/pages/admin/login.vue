<script setup lang="ts">
definePageMeta({ layout: false, middleware: "guest" })

const { fetch: fetchSession } = useUserSession()

const form = reactive({ username: "", password: "" })
const error = ref<string | null>(null)
const loading = ref(false)
const showPassword = ref(false)

async function submit() {
  error.value = null
  loading.value = true
  try {
    await $fetch("/api/auth/login", { method: "POST", body: form })
    await fetchSession()
    await navigateTo("/admin")
  } catch (e: any) {
    error.value = e.data?.message ?? "Identifiants incorrects"
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div :style="{ background: 'var(--bg)', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }">
    <div :style="{
      backgroundImage: `linear-gradient(135deg, rgba(45,70,48,.85), rgba(45,70,48,.95)), url(/assets/images/header.webp)`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      padding: '56px', color: '#fbf7ef',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '14px' }">
        <div :style="{ width: '48px', height: '48px', background: 'rgba(255,255,255,.15)', borderRadius: '50%', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: '600' }">cca</div>
        <div :style="{ fontFamily: 'var(--font-display)', fontSize: '18px' }">CCA Rillieux-Vancia</div>
      </div>
      <div>
        <div :style="{ fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c8c0a8' }">Espace réservé</div>
        <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '52px', lineHeight: '1.05', marginTop: '12px', fontWeight: '400' }">
          Gestion<br>du club.
        </h1>
        <p :style="{ marginTop: '18px', color: '#c8c0a8', maxWidth: '400px', fontSize: '15px' }">
          Connectez-vous pour gérer les actualités, l'équipe, les tarifs et les horaires.
        </p>
      </div>
      <div :style="{ fontSize: '12px', color: '#c8c0a8' }">© 2026 CCA Vancia · Accès restreint</div>
    </div>

    <div :style="{ display: 'grid', placeItems: 'center', padding: '40px' }">
      <form @submit.prevent="submit" :style="{ width: '380px', display: 'flex', flexDirection: 'column', gap: '16px' }">
        <h2 :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500' }">Connexion</h2>
        <p :style="{ color: 'var(--ink-2)', marginTop: '-4px', fontSize: '14px' }">Entrez vos identifiants administrateur.</p>

        <div
          v-if="error"
          :style="{
            padding: '14px', borderRadius: 'var(--r-md)',
            background: 'color-mix(in oklab, var(--danger) 8%, var(--surface))',
            border: '1px solid color-mix(in oklab, var(--danger) 30%, transparent)',
            fontSize: '13px', color: 'var(--danger)',
            display: 'flex', gap: '10px', alignItems: 'flex-start',
          }"
        >
          <span :style="{ fontWeight: '700' }">!</span>
          <div>
            <strong>{{ error }}</strong>
            <div :style="{ color: 'var(--ink-2)', marginTop: '2px' }">Vérifiez votre nom d'admin et votre mot de passe.</div>
          </div>
        </div>

        <div class="cca-field" :style="{ marginTop: '12px' }">
          <label for="username">Nom d'admin</label>
          <input id="username" v-model="form.username" class="cca-input" placeholder="Jean-Jacques" required />
        </div>
        <div class="cca-field">
          <label for="password">Mot de passe</label>
          <div :style="{ position: 'relative' }">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="cca-input"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              :style="{ position: 'absolute', right: '10px', top: '8px', padding: '6px', color: 'var(--ink-3)', background: 'none', border: 'none', cursor: 'pointer' }"
            >{{ showPassword ? '🙈' : '👁' }}</button>
          </div>
        </div>
        <button type="submit" class="cca-btn cca-btn--primary cca-btn--lg" :style="{ marginTop: '12px', justifyContent: 'center' }" :disabled="loading">
          {{ loading ? 'Connexion...' : 'Connexion →' }}
        </button>
        <div :style="{ marginTop: '12px', padding: '14px', borderRadius: 'var(--r-md)', background: 'var(--surface-2)', fontSize: '13px', color: 'var(--ink-3)', display: 'flex', alignItems: 'flex-start', gap: '10px' }">
          <span>ⓘ</span>
          <span>Pas de compte ? Demandez l'accès auprès du président du club.</span>
        </div>
      </form>
    </div>
  </div>
</template>
