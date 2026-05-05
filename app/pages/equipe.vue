<script setup lang="ts">
const { data: members } = await useFetch("/api/members")
</script>

<template>
  <section :style="{ padding: '72px 56px 56px', maxWidth: '1280px', margin: '0 auto' }">
    <div class="cca-eyebrow">Bénévoles passionnés</div>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '56px', lineHeight: '1.05', marginTop: '12px', fontWeight: '400' }">
      Membres du bureau<br>
      <em :style="{ color: 'var(--forest)', fontStyle: 'italic' }">et moniteurs.</em>
    </h1>
    <p :style="{ marginTop: '18px', color: 'var(--ink-2)', fontSize: '17px', maxWidth: '640px' }">
      Le club tourne grâce à des bénévoles. Voici les visages qui vous accueilleront, vous formeront,
      et qui prennent soin du terrain chaque semaine.
    </p>
  </section>

  <section :style="{ padding: '0 56px 96px', maxWidth: '1280px', margin: '0 auto' }">
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }">
      <article v-for="m in members" :key="m.id" class="cca-card" :style="{ overflow: 'hidden' }">
        <div :style="{ aspectRatio: '1 / 1', overflow: 'hidden', background: 'var(--surface-2)' }">
          <AppImage :src="m.photo ? `/uploads/${m.photo}` : null" :label="m.name" />
        </div>
        <div :style="{ padding: '22px 24px 26px' }">
          <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '500' }">{{ m.name }}</h3>
          <div :style="{ marginTop: '4px', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terracotta)', fontWeight: '600' }">
            {{ m.description.split('\n')[0] }}
          </div>
          <p :style="{ marginTop: '14px', color: 'var(--ink-2)', fontSize: '14px', lineHeight: '1.6' }">{{ m.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
