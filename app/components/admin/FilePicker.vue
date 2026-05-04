<script setup lang="ts">
const props = defineProps<{
  modelValue?: string | null
}>()

const emit = defineEmits<{
  "update:modelValue": [value: string]
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const previewSrc = ref<string | null>(props.modelValue ?? null)
const filename = ref<string | null>(props.modelValue ? props.modelValue.split("/").pop() ?? null : null)
const error = ref<string | null>(null)
const uploading = ref(false)

watch(() => props.modelValue, (val) => {
  previewSrc.value = val ?? null
})

async function handleFile(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return

  error.value = null
  const ALLOWED = ["image/jpeg", "image/png", "image/webp"]
  if (!ALLOWED.includes(file.type)) {
    error.value = "Format invalide. Utilisez JPG, PNG ou WebP."
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    error.value = "Fichier trop lourd (max 5 Mo)."
    return
  }

  uploading.value = true
  filename.value = file.name
  previewSrc.value = URL.createObjectURL(file)

  const form = new FormData()
  form.append("file", file)

  const res = await $fetch<{ filename: string }>("/api/upload", {
    method: "POST",
    body: form,
  }).catch((err) => {
    error.value = err.data?.message ?? "Erreur lors de l'upload."
    return null
  })

  uploading.value = false
  if (res) emit("update:modelValue", `/uploads/${res.filename}`)
}
</script>

<template>
  <div class="cca-field">
    <label>Image <span :style="{ color: 'var(--ink-3)', fontWeight: '400' }">· JPG, PNG ou WebP, max 5 Mo</span></label>
    <div :style="{
      border: error ? '2px dashed var(--danger)' : '2px dashed var(--line-strong)',
      borderRadius: 'var(--r-md)',
      padding: '20px',
      background: 'var(--paper)',
      display: 'grid',
      gridTemplateColumns: previewSrc ? '120px 1fr auto' : '1fr auto',
      gap: '16px', alignItems: 'center',
    }">
      <div v-if="previewSrc" :style="{ width: '120px', height: '90px', borderRadius: 'var(--r-sm)', overflow: 'hidden', background: 'var(--surface-2)' }">
        <img :src="previewSrc" alt="preview" :style="{ width: '100%', height: '100%', objectFit: 'cover' }" />
      </div>
      <div>
        <div :style="{ fontSize: '14px', fontWeight: '500' }">
          {{ uploading ? 'Upload en cours...' : (filename ?? 'Glissez-déposez une image ou parcourez') }}
        </div>
        <div :style="{ fontSize: '12px', color: 'var(--ink-3)', marginTop: '2px' }">
          {{ previewSrc && !uploading ? 'Cliquez « Parcourir » pour changer' : 'Formats : JPG, PNG, WebP · Max 5 Mo' }}
        </div>
      </div>
      <button class="cca-btn cca-btn--secondary cca-btn--sm" type="button" @click="fileInput?.click()" :disabled="uploading">
        Parcourir
      </button>
    </div>
    <div v-if="error" :style="{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', fontSize: '12px', color: 'var(--danger)', fontWeight: '500' }">
      <span :style="{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--danger)', color: '#fbf7ef', display: 'grid', placeItems: 'center', fontSize: '9px', fontWeight: '700' }">!</span>
      {{ error }}
    </div>
    <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/webp" style="display:none" @change="handleFile" />
  </div>
</template>
