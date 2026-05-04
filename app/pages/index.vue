<script setup lang="ts">
const actIndex = ref(0)

const activities = [
  {
    title: "Éducation chiots",
    tag: "École du chiot",
    img: "/assets/images/activites/education.webp",
    desc: "De 2 à 12 mois, on pose les bases dans la douceur. Socialisation, premiers ordres, propreté, marche en laisse — votre chiot apprend en jouant.",
  },
  {
    title: "Éducation chiens adultes",
    tag: "Tous niveaux",
    img: "/assets/images/activites/education.webp",
    desc: "Que votre chien débute ou qu'il ait besoin d'un cadre, nos moniteurs adaptent les exercices. Rappel, marche au pied, gestion des émotions.",
  },
  {
    title: "Sauvetage en compétition",
    tag: "Compétition",
    img: "/assets/images/activites/sauvetage.webp",
    desc: "Une discipline exigeante et passionnante. Le chien apprend à pister, retrouver et secourir des personnes. Test préalable nécessaire.",
  },
  {
    title: "Obéissance",
    tag: "Compétition",
    img: "/assets/images/activites/obeissance.webp",
    desc: "Précision, complicité, finesse. L'obéissance pousse le travail du binôme maître-chien à son plus haut niveau. Test préalable nécessaire.",
  },
]

const { data: latestPost } = await useFetch("/api/posts", {
  query: { limit: 1 },
  transform: (posts: any[]) => posts[0] ?? null,
})

const a = computed(() => activities[actIndex.value])
</script>

<template>
  <!-- HERO -->
  <section :style="{
    position: 'relative', height: '560px',
    backgroundImage: 'url(/assets/images/header.webp)',
    backgroundSize: 'cover', backgroundPosition: 'center 40%',
  }">
    <div :style="{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, rgba(42,37,32,0.15) 0%, rgba(42,37,32,0.55) 100%)' }" />
    <div :style="{
      position: 'absolute', left: '56px', right: '56px', bottom: '48px',
      display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', alignItems: 'end',
    }">
      <div :style="{ background: 'var(--surface)', padding: '36px 40px', borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-3)' }">
        <div class="cca-eyebrow">Rillieux-la-Pape · 69140</div>
        <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '56px', lineHeight: '1.05', fontWeight: '400', marginTop: '12px', letterSpacing: '-0.015em' }">
          Le club canin <em :style="{ color: 'var(--forest)', fontStyle: 'italic' }">familial</em><br>
          au cœur de la nature.
        </h1>
        <p :style="{ marginTop: '18px', fontSize: '16px', color: 'var(--ink-2)', maxWidth: '520px', lineHeight: '1.6' }">
          Éducation canine, sauvetage et obéissance depuis 1959 — sur un terrain boisé,
          avec des bénévoles passionnés, et tous les samedis.
        </p>
        <div :style="{ display: 'flex', gap: '12px', marginTop: '28px' }">
          <NuxtLink to="/tarifs-horaires" class="cca-btn cca-btn--primary cca-btn--lg">Tarifs &amp; horaires →</NuxtLink>
          <a class="cca-btn cca-btn--secondary cca-btn--lg" href="#activites">Découvrir les activités</a>
        </div>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '14px', paddingBottom: '8px', color: '#fbf7ef' }">
        <div :style="{
          background: 'rgba(251,247,239,0.18)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(251,247,239,0.3)', borderRadius: 'var(--r-md)',
          padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '14px',
        }">
          <div :style="{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: '0.85' }">
            Prochain rendez-vous
          </div>
          <div :style="{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontSize: '18px' }">
            Samedi 9h30
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ACTUALITÉ -->
  <section :style="{ padding: '96px 56px 64px', maxWidth: '1280px', margin: '0 auto' }">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '32px' }">
      <div>
        <div class="cca-eyebrow">Dernière actualité</div>
        <h2 class="cca-h-section">Ce qu'il se passe <em>au club.</em></h2>
      </div>
      <NuxtLink to="/actualites" class="cca-btn cca-btn--ghost">Voir les anciennes actualités →</NuxtLink>
    </div>

    <article v-if="latestPost" :style="{
      display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '0',
      background: 'var(--surface)', borderRadius: 'var(--r-xl)',
      overflow: 'hidden', border: '1px solid var(--line)',
    }">
      <AppImage :src="latestPost.image ? `/uploads/${latestPost.image}` : null" :label="latestPost.title" :style="{ minHeight: '380px' }" />
      <div :style="{ padding: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }">
        <div :style="{ display: 'flex', gap: '8px', marginBottom: '16px' }">
          <span class="cca-pill cca-pill--accent">Actualité</span>
          <span class="cca-pill cca-pill--neutral">{{ new Date(latestPost.publishedAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }) }}</span>
        </div>
        <h3 :style="{ fontSize: '32px', fontFamily: 'var(--font-display)', lineHeight: '1.15', fontWeight: '500' }">
          {{ latestPost.title }}
        </h3>
        <p :style="{ marginTop: '18px', color: 'var(--ink-2)', lineHeight: '1.65', fontSize: '15px' }">
          {{ latestPost.description }}
        </p>
        <NuxtLink to="/actualites" :style="{ marginTop: '24px', color: 'var(--forest)', fontWeight: '600', fontSize: '14px' }">
          Voir toutes les actualités →
        </NuxtLink>
      </div>
    </article>
    <div v-else :style="{ padding: '48px', textAlign: 'center', color: 'var(--ink-3)', background: 'var(--surface)', borderRadius: 'var(--r-xl)', border: '1px solid var(--line)' }">
      Aucune actualité pour le moment.
    </div>
  </section>

  <!-- ACTIVITÉS -->
  <section id="activites" :style="{ padding: '64px 56px 96px', background: 'var(--surface-2)', borderTop: '1px solid var(--line)' }">
    <div :style="{ maxWidth: '1280px', margin: '0 auto' }">
      <div :style="{ marginBottom: '32px' }">
        <div class="cca-eyebrow">Nos activités</div>
        <h2 class="cca-h-section">Quatre disciplines, <em>une passion.</em></h2>
      </div>

      <div :style="{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }">
        <button
          v-for="(act, i) in activities"
          :key="act.title"
          @click="actIndex = i"
          :style="{
            padding: '10px 18px',
            background: i === actIndex ? 'var(--forest)' : 'var(--surface)',
            color: i === actIndex ? '#fbf7ef' : 'var(--ink-2)',
            border: `1px solid ${i === actIndex ? 'var(--forest)' : 'var(--line)'}`,
            borderRadius: '100px', fontSize: '14px', fontWeight: '500', fontFamily: 'inherit',
          }"
        >{{ act.title }}</button>
      </div>

      <article :style="{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0',
        background: 'var(--surface)', borderRadius: 'var(--r-xl)',
        overflow: 'hidden', border: '1px solid var(--line)',
      }">
        <AppImage :src="a.img" :label="a.title" :style="{ minHeight: '360px' }" />
        <div :style="{ padding: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }">
          <span class="cca-pill" :style="{ alignSelf: 'flex-start' }">{{ a.tag }}</span>
          <h3 :style="{ fontSize: '32px', fontFamily: 'var(--font-display)', marginTop: '14px', lineHeight: '1.15', fontWeight: '500' }">
            {{ a.title }}
          </h3>
          <p :style="{ marginTop: '16px', color: 'var(--ink-2)', lineHeight: '1.65', fontSize: '15px' }">
            {{ a.desc }}
          </p>
          <div :style="{ display: 'flex', gap: '8px', marginTop: '28px' }">
            <NuxtLink to="/tarifs-horaires" class="cca-btn cca-btn--primary">Plus d'infos</NuxtLink>
            <NuxtLink to="/tarifs-horaires" class="cca-btn cca-btn--ghost">Tarifs →</NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- CTA -->
  <section :style="{ padding: '80px 56px', background: 'var(--bg)', textAlign: 'center' }">
    <div :style="{ maxWidth: '720px', margin: '0 auto' }">
      <div class="cca-eyebrow">Vous voulez plus d'infos ?</div>
      <h2 :style="{ fontFamily: 'var(--font-display)', fontSize: '44px', lineHeight: '1.1', marginTop: '12px', fontWeight: '400' }">
        Venez nous rencontrer<br>
        <em :style="{ color: 'var(--terracotta)', fontStyle: 'italic' }">un samedi.</em>
      </h2>
      <p :style="{ marginTop: '18px', color: 'var(--ink-2)', fontSize: '16px' }">
        La meilleure façon de découvrir le club, c'est de pousser le portail.
        On vous accueille avec un café (pour vous) et de l'eau fraîche (pour votre chien).
      </p>
      <div :style="{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '32px' }">
        <NuxtLink to="/tarifs-horaires" class="cca-btn cca-btn--accent cca-btn--lg">Voir tarifs &amp; horaires</NuxtLink>
        <a href="tel:0611130352" class="cca-btn cca-btn--secondary cca-btn--lg">☎ &nbsp; 06 11 13 03 52</a>
      </div>
    </div>
  </section>
</template>
