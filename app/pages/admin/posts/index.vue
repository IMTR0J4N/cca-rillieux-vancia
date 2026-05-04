<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: "auth" })

const { data: posts, refresh } = await useFetch("/api/posts")
const deleteTarget = ref<{ id: number; title: string } | null>(null)
const deleting = ref(false)

async function confirmDelete() {
  if (!deleteTarget.value) return
  deleting.value = true
  await $fetch(`/api/posts/${deleteTarget.value.id}`, { method: "DELETE" })
  deleteTarget.value = null
  deleting.value = false
  refresh()
}
</script>

<template>
  <AdminManagerHeader
    title="Gestion des actualités"
    subtitle="Publiez, modifiez et archivez les actualités du club."
    :count="posts?.length ?? 0"
    count-label="actualités"
    add-label="Nouvelle actualité"
    add-url="/admin/posts/new"
  />

  <div class="cca-card" :style="{ overflow: 'hidden' }">
    <table :style="{ width: '100%', borderCollapse: 'collapse' }">
      <thead>
        <tr :style="{ background: 'var(--surface-2)', borderBottom: '1px solid var(--line)' }">
          <th :style="{ width: '80px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }"></th>
          <th :style="{ textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Titre</th>
          <th :style="{ width: '160px', textAlign: 'left', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Date</th>
          <th :style="{ width: '200px', textAlign: 'right', padding: '14px 22px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(post, i) in posts"
          :key="post.id"
          :style="{ borderBottom: i === (posts?.length ?? 0) - 1 ? 'none' : '1px solid var(--line)' }"
        >
          <td :style="{ padding: '12px 22px' }">
            <div :style="{ width: '56px', height: '56px', borderRadius: 'var(--r-sm)', overflow: 'hidden', background: 'var(--surface-2)' }">
              <AppImage :src="post.image ? `/uploads/${post.image}` : null" :label="post.title" />
            </div>
          </td>
          <td :style="{ padding: '16px 12px', fontSize: '14px', fontWeight: '500' }">{{ post.title }}</td>
          <td :style="{ padding: '16px 12px', fontSize: '13px', color: 'var(--ink-3)', fontFamily: 'var(--font-mono)' }">
            {{ new Date(post.publishedAt).toLocaleDateString('fr-FR') }}
          </td>
          <td :style="{ padding: '12px 22px' }">
            <div :style="{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }">
              <NuxtLink :to="`/admin/posts/${post.id}`" class="cca-btn cca-btn--secondary cca-btn--sm">✎ Modifier</NuxtLink>
              <button class="cca-btn cca-btn--sm" :style="{ background: 'var(--danger-soft)', color: 'var(--danger)' }" @click="deleteTarget = { id: post.id, title: post.title }">✕</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <AdminDeleteModal
    v-if="deleteTarget"
    :label="deleteTarget.title"
    :loading="deleting"
    @confirm="confirmDelete"
    @cancel="deleteTarget = null"
  />
</template>
