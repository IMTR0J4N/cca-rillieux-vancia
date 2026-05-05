<script setup lang="ts">
const { data: pricingList } = await useFetch("/api/pricing")
const { data: schedules } = await useFetch("/api/schedules")

const morningSchedules = computed(() => schedules.value?.filter(s => s.timeOfDay === "MORNING") ?? [])
const afternoonSchedules = computed(() => schedules.value?.filter(s => s.timeOfDay === "AFTERNOON") ?? [])
</script>

<template>
  <!-- Header -->
  <section :style="{ padding: '72px 56px 56px', maxWidth: '1280px', margin: '0 auto' }">
    <div class="cca-eyebrow">Adhésion 2025/2026</div>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '56px', lineHeight: '1.05', marginTop: '12px', fontWeight: '400', maxWidth: '800px' }">
      Tarifs &amp; horaires
    </h1>
    <p :style="{ marginTop: '18px', color: 'var(--ink-2)', fontSize: '17px', maxWidth: '640px' }">
      Saison de septembre à juin. Cotisation et licence CUN-CBC obligatoire pour les
      compétiteurs, facultative pour les adhérents.
    </p>
  </section>

  <!-- TARIFS -->
  <section :style="{ padding: '0 56px 80px', maxWidth: '1280px', margin: '0 auto' }">
    <div :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }">
      <div
        v-for="(f, idx) in pricingList"
        :key="f.id"
        :style="{
          padding: '36px',
          borderRadius: 'var(--r-xl)',
          background: idx === 0 ? 'var(--forest)' : 'var(--surface)',
          color: idx === 0 ? '#fbf7ef' : 'var(--ink)',
          border: idx === 0 ? 'none' : '1px solid var(--line)',
          boxShadow: idx === 0 ? 'var(--shadow-3)' : 'var(--shadow-1)',
          position: 'relative',
        }"
      >
        <span v-if="idx === 0" :style="{
          position: 'absolute', top: '24px', right: '24px',
          background: 'var(--terracotta)', color: '#fbf7ef',
          padding: '4px 12px', borderRadius: '100px',
          fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase',
        }">Nouveau</span>
        <div :style="{ fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: '0.75', fontWeight: '600' }">
          {{ idx === 0 ? 'Votre première saison au club' : 'À partir de la 2ème année' }}
        </div>
        <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '30px', marginTop: '8px', fontWeight: '500', lineHeight: '1.15' }">
          {{ f.label }}
        </h3>

        <div :style="{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '0' }">
          <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '16px 0', borderBottom: `1px solid ${idx === 0 ? 'rgba(255,255,255,.15)' : 'var(--line)'}` }">
            <span :style="{ fontSize: '14px', opacity: idx === 0 ? '0.85' : '1', color: idx === 0 ? '#fbf7ef' : 'var(--ink-2)' }">1er chien</span>
            <span :style="{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '500' }">{{ Number(f.firstDog) }} €</span>
          </div>
          <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: `1px solid ${idx === 0 ? 'rgba(255,255,255,.15)' : 'var(--line)'}` }">
            <span :style="{ fontSize: '14px', opacity: idx === 0 ? '0.85' : '1', color: idx === 0 ? '#fbf7ef' : 'var(--ink-2)' }">2ème chien</span>
            <span :style="{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '500' }">{{ Number(f.secondDog) }} €</span>
          </div>
          <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0' }">
            <span :style="{ fontSize: '14px', opacity: idx === 0 ? '0.85' : '1', color: idx === 0 ? '#fbf7ef' : 'var(--ink-2)' }">Licence par chien</span>
            <span :style="{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '500' }">{{ Number(f.perDog) }} €</span>
          </div>
        </div>

        <a :style="{
          marginTop: '28px', display: 'inline-block',
          padding: '12px 22px', borderRadius: 'var(--r-md)',
          background: idx === 0 ? '#fbf7ef' : 'var(--ink)',
          color: idx === 0 ? 'var(--forest-deep)' : '#fbf7ef',
          fontSize: '14px', fontWeight: '600',
        }">S'inscrire à cette formule</a>
      </div>
    </div>

    <!-- Documents -->
    <div :style="{
      marginTop: '24px', background: 'var(--terracotta-soft)',
      padding: '28px 32px', borderRadius: 'var(--r-lg)',
      display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '28px', alignItems: 'center',
    }">
      <div :style="{ width: '56px', height: '56px', borderRadius: 'var(--r-md)', background: 'var(--terracotta)', color: '#fbf7ef', display: 'grid', placeItems: 'center', fontSize: '24px' }">📋</div>
      <div>
        <h4 :style="{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '500', color: 'var(--terracotta-deep)' }">
          Documents à prévoir lors de l'inscription
        </h4>
        <ul :style="{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '10px 24px', color: 'var(--ink-2)', fontSize: '14px' }">
          <li>✓ &nbsp; Copie de la carte ICAD</li>
          <li>✓ &nbsp; Copie du carnet de santé (vaccination à jour)</li>
          <li>✓ &nbsp; Attestation d'assurance responsabilité civile</li>
        </ul>
        <p :style="{ marginTop: '12px', fontSize: '13px', color: 'var(--ink-3)', fontStyle: 'italic' }">
          Pour les inscriptions en cours d'année, tarif dégressif. Nous contacter pour les détails.
        </p>
      </div>
    </div>
  </section>

  <!-- HORAIRES -->
  <section :style="{ background: 'var(--surface-2)', borderTop: '1px solid var(--line)', padding: '80px 56px' }">
    <div :style="{ maxWidth: '1280px', margin: '0 auto' }">
      <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '32px' }">
        <div>
          <div class="cca-eyebrow">Tous les samedis</div>
          <h2 class="cca-h-section">Le planning <em>du club.</em></h2>
        </div>
        <span :style="{ fontSize: '14px', color: 'var(--ink-3)' }">Sauf jours fériés et vacances scolaires</span>
      </div>

      <div :style="{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }">
        <!-- Matin -->
        <div class="cca-card" :style="{ padding: '28px' }">
          <div :style="{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '6px' }">
            <div :style="{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--forest-soft)', color: 'var(--forest)', display: 'grid', placeItems: 'center', fontSize: '18px' }">☀</div>
            <div>
              <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '500' }">Matin</h3>
              <span :style="{ fontSize: '13px', color: 'var(--ink-3)' }">9h00 — 12h30</span>
            </div>
          </div>
          <ul :style="{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '0' }">
            <li
              v-for="(s, i) in morningSchedules"
              :key="s.id"
              :style="{
                display: 'grid', gridTemplateColumns: '120px 1fr', gap: '16px',
                padding: '16px 0',
                borderBottom: i === morningSchedules.length - 1 ? 'none' : '1px solid var(--line)',
                alignItems: 'baseline',
              }"
            >
              <span :style="{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--terracotta-deep)', fontWeight: '600' }">{{ s.slot }}</span>
              <div :style="{ fontWeight: '500', fontSize: '15px' }">{{ s.label }}</div>
            </li>
          </ul>
        </div>

        <!-- Après-midi -->
        <div class="cca-card" :style="{ padding: '28px' }">
          <div :style="{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '6px' }">
            <div :style="{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--forest-soft)', color: 'var(--forest)', display: 'grid', placeItems: 'center', fontSize: '18px' }">◐</div>
            <div>
              <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '500' }">Après-midi</h3>
              <span :style="{ fontSize: '13px', color: 'var(--ink-3)' }">13h30 — 17h00</span>
            </div>
          </div>
          <ul :style="{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '0' }">
            <li
              v-for="(s, i) in afternoonSchedules"
              :key="s.id"
              :style="{
                display: 'grid', gridTemplateColumns: '120px 1fr', gap: '16px',
                padding: '16px 0',
                borderBottom: i === afternoonSchedules.length - 1 ? 'none' : '1px solid var(--line)',
                alignItems: 'baseline',
              }"
            >
              <span :style="{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--terracotta-deep)', fontWeight: '600' }">{{ s.slot }}</span>
              <div :style="{ fontWeight: '500', fontSize: '15px' }">{{ s.label }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT & MAP -->
  <section :style="{ padding: '80px 56px', maxWidth: '1280px', margin: '0 auto' }">
    <div :style="{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '32px' }">
      <div :style="{ borderRadius: 'var(--r-xl)', overflow: 'hidden', border: '1px solid var(--line)', minHeight: '420px', position: 'relative' }">
        <div :style="{
          width: '100%', height: '100%', minHeight: '420px', position: 'relative',
          background: `radial-gradient(circle at 65% 45%, rgba(184,92,60,.18) 0, transparent 8%), repeating-linear-gradient(60deg, rgba(61,90,61,.06) 0 2px, transparent 2px 12px), repeating-linear-gradient(-30deg, rgba(122,90,58,.04) 0 1px, transparent 1px 8px), linear-gradient(180deg, #e6ede1 0%, #efe7d5 100%)`,
        }">
          <svg style="position:absolute;inset:0;width:100%;height:100%" preserveAspectRatio="none" viewBox="0 0 600 420">
            <path d="M 0 200 Q 200 180, 400 220 T 600 240" stroke="#fbf7ef" stroke-width="14" fill="none"/>
            <path d="M 100 0 Q 250 200, 280 420" stroke="#fbf7ef" stroke-width="10" fill="none"/>
            <path d="M 0 80 L 600 90" stroke="#fbf7ef" stroke-width="6" fill="none" opacity=".7"/>
            <path d="M 380 0 L 410 420" stroke="#fbf7ef" stroke-width="6" fill="none" opacity=".7"/>
          </svg>
          <div :style="{ position: 'absolute', left: '62%', top: '42%', transform: 'translate(-50%, -100%)' }">
            <div :style="{ width: '40px', height: '40px', borderRadius: '50% 50% 50% 0', background: 'var(--terracotta)', transform: 'rotate(-45deg)', boxShadow: '0 6px 14px rgba(0,0,0,.2)', display: 'grid', placeItems: 'center' }">
              <span :style="{ transform: 'rotate(45deg)', color: '#fbf7ef', fontSize: '18px' }">📍</span>
            </div>
          </div>
          <div :style="{ position: 'absolute', bottom: '16px', left: '16px', background: 'var(--surface)', padding: '10px 14px', borderRadius: 'var(--r-sm)', boxShadow: 'var(--shadow-2)', fontSize: '12px', fontWeight: '500' }">
            📍 1180 Chem. de Sathonay Village, Vancia
          </div>
        </div>
      </div>

      <div :style="{ display: 'flex', flexDirection: 'column', gap: '16px' }">
        <div class="cca-card" :style="{ padding: '28px' }">
          <div class="cca-eyebrow" :style="{ color: 'var(--forest)' }">Adresse</div>
          <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '22px', marginTop: '8px', fontWeight: '500', lineHeight: '1.3' }">
            1180 Chemin de Sathonay Village
          </h3>
          <p :style="{ color: 'var(--ink-2)', marginTop: '4px' }">69140 Rillieux-la-Pape · Vancia</p>
          <a href="https://maps.google.com/?q=1180+Chemin+de+Sathonay+Village,+69140+Rillieux-la-Pape" target="_blank" class="cca-btn cca-btn--secondary" :style="{ marginTop: '18px' }">
            Itinéraire Google Maps →
          </a>
        </div>
        <div class="cca-card" :style="{ padding: '28px', background: 'var(--forest)', color: '#fbf7ef', borderColor: 'transparent' }">
          <div class="cca-eyebrow" :style="{ color: 'var(--terracotta-soft)' }">Contactez-nous</div>
          <h3 :style="{ fontFamily: 'var(--font-display)', fontSize: '22px', marginTop: '8px', fontWeight: '500' }">
            Une question ?
          </h3>
          <div :style="{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }">
            <a href="tel:0611130352" :style="{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', background: 'rgba(255,255,255,.1)', borderRadius: 'var(--r-md)', fontSize: '14px' }">
              <span :style="{ width: '32px', height: '32px', background: 'rgba(255,255,255,.15)', borderRadius: '50%', display: 'grid', placeItems: 'center' }">☎</span>
              06 11 13 03 52
            </a>
            <a href="mailto:cca.vancia.secretariat@gmail.com" :style="{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', background: 'rgba(255,255,255,.1)', borderRadius: 'var(--r-md)', fontSize: '13px' }">
              <span :style="{ width: '32px', height: '32px', background: 'rgba(255,255,255,.15)', borderRadius: '50%', display: 'grid', placeItems: 'center' }">✉</span>
              cca.vancia.secretariat@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
