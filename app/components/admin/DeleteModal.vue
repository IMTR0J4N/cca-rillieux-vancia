<script setup lang="ts">
const props = defineProps<{
  label: string
  loading?: boolean
}>()

const emit = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <div :style="{
    position: 'fixed', inset: '0',
    background: 'rgba(42,37,32,0.55)',
    display: 'grid', placeItems: 'center',
    backdropFilter: 'blur(2px)',
    zIndex: '50',
  }">
    <div :style="{
      width: '460px', background: 'var(--surface)',
      borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-3)',
      overflow: 'hidden',
    }">
      <div :style="{ padding: '32px 32px 8px', textAlign: 'center' }">
        <div :style="{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'var(--danger-soft)', color: 'var(--danger)',
          display: 'grid', placeItems: 'center', fontSize: '28px',
          margin: '0 auto 18px',
        }">⚠</div>
        <h2 :style="{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '500', lineHeight: '1.25' }">
          Supprimer cet élément ?
        </h2>
        <p :style="{ marginTop: '12px', color: 'var(--ink-2)', fontSize: '14px', lineHeight: '1.6' }">
          <strong :style="{ color: 'var(--ink)' }">« {{ label }} »</strong> sera définitivement supprimé(e).
          Cette action est irréversible.
        </p>
      </div>
      <div :style="{
        padding: '20px', marginTop: '24px',
        display: 'flex', gap: '10px', background: 'var(--surface-2)',
        borderTop: '1px solid var(--line)',
      }">
        <button
          class="cca-btn cca-btn--secondary"
          :style="{ flex: '1', justifyContent: 'center' }"
          @click="emit('cancel')"
        >Annuler</button>
        <button
          class="cca-btn cca-btn--danger"
          :style="{ flex: '1', justifyContent: 'center' }"
          :disabled="loading"
          @click="emit('confirm')"
        >{{ loading ? 'Suppression...' : 'Oui, supprimer' }}</button>
      </div>
    </div>
  </div>
</template>
