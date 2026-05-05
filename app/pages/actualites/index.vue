<script setup lang="ts">
const page = ref(1)
const PER_PAGE = 6

const { data: posts } = await useFetch("/api/posts")

const total = computed(() => posts.value?.length ?? 0)
const totalPages = computed(() => Math.ceil(total.value / PER_PAGE))
const paginatedPosts = computed(() => {
  const start = (page.value - 1) * PER_PAGE
  return posts.value?.slice(start, start + PER_PAGE) ?? []
})
</script>

<template>
  <section :style="{ padding: '72px 56px 32px', maxWidth: '1280px', margin: '0 auto' }">
    <NuxtLink to="/" :style="{ fontSize: '14px', color: 'var(--ink-3)' }">← Retour à l'accueil</NuxtLink>
    <div class="cca-eyebrow" :style="{ marginTop: '14px' }">Archives</div>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '56px', lineHeight: '1.05', marginTop: '12px', fontWeight: '400' }">
      Nos actualités.
    </h1>
  </section>

  <section :style="{ padding: '32px 56px 96px', maxWidth: '1280px', margin: '0 auto' }">
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }">
      <article v-for="post in paginatedPosts" :key="post.id" class="cca-card">
        <div :style="{ aspectRatio: '16/9', overflow: 'hidden' }">
          <AppImage :src="post.image ? `/uploads/${post.image}` : null" :label="post.title" />
        </div>
        <div :style="{ padding: '28px' }">
          <span class="cca-pill cca-pill--neutral">{{ new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }) }}</span>
          <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '24px', marginTop: '12px', fontWeight: '500', lineHeight: '1.25' }">
            {{ post.title }}
          </h3>
          <p :style="{ marginTop: '12px', color: 'var(--ink-2)', fontSize: '14px', lineHeight: '1.6' }">{{ post.description }}</p>
        </div>
      </article>
    </div>

    <div v-if="totalPages > 1" :style="{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '56px' }">
      <button
        :style="{ minWidth: '40px', height: '40px', borderRadius: 'var(--r-sm)', display: 'grid', placeItems: 'center', background: 'var(--surface)', color: 'var(--ink-2)', border: '1px solid var(--line)', fontSize: '14px', fontWeight: '500', padding: '0 12px', cursor: 'pointer' }"
        :disabled="page === 1"
        @click="page--"
      >←</button>
      <button
        v-for="p in totalPages"
        :key="p"
        @click="page = p"
        :style="{
          minWidth: '40px', height: '40px', borderRadius: 'var(--r-sm)',
          display: 'grid', placeItems: 'center',
          background: p === page ? 'var(--forest)' : 'var(--surface)',
          color: p === page ? '#fbf7ef' : 'var(--ink-2)',
          border: '1px solid var(--line)', fontSize: '14px', fontWeight: '500',
          padding: '0 12px', cursor: 'pointer',
        }"
      >{{ p }}</button>
      <button
        :style="{ minWidth: '40px', height: '40px', borderRadius: 'var(--r-sm)', display: 'grid', placeItems: 'center', background: 'var(--surface)', color: 'var(--ink-2)', border: '1px solid var(--line)', fontSize: '14px', fontWeight: '500', padding: '0 12px', cursor: 'pointer' }"
        :disabled="page === totalPages"
        @click="page++"
      >→</button>
    </div>
  </section>
</template>
