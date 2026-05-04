<template>
  <section :style="{ padding: '72px 56px 32px', maxWidth: '960px', margin: '0 auto' }">
    <div class="cca-eyebrow">Depuis 1959</div>
    <h1 :style="{ fontFamily: 'var(--font-display)', fontSize: '56px', lineHeight: '1.05', marginTop: '12px', fontWeight: '400' }">
      L'histoire <em :style="{ color: 'var(--forest)', fontStyle: 'italic' }">du club.</em>
    </h1>
  </section>

  <section :style="{ padding: '32px 56px 96px', maxWidth: '960px', margin: '0 auto' }">
    <figure :style="{ margin: '0', borderRadius: 'var(--r-xl)', overflow: 'hidden', border: '1px solid var(--line)' }">
      <AppImage src="/assets/histoire-du-club.webp" label="Le terrain du club" :style="{ aspectRatio: '16/9' }" />
      <figcaption :style="{ padding: '14px 20px', fontSize: '13px', color: 'var(--ink-3)', background: 'var(--surface)' }">
        Le terrain boisé du club, à Vancia.
      </figcaption>
    </figure>

    <div :style="{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px' }">
      <div>
        <div :style="{ position: 'sticky', top: '24px' }">
          <div :style="{ fontFamily: 'var(--font-display)', fontSize: '72px', color: 'var(--terracotta)', fontWeight: '400', lineHeight: '1', fontStyle: 'italic' }">
            1959
          </div>
          <div :style="{ fontSize: '13px', color: 'var(--ink-3)', marginTop: '4px' }">année de fondation</div>
          <hr :style="{ margin: '24px 0', border: 'none', borderTop: '1px solid var(--line)' }" />
          <ul :style="{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: 'var(--ink-2)' }">
            <li>
              <strong :style="{ color: 'var(--ink)' }">3 terrains</strong><br>
              <span :style="{ color: 'var(--ink-3)' }">détente, chiots, éducation</span>
            </li>
            <li>
              <strong :style="{ color: 'var(--ink)' }">4 disciplines</strong><br>
              <span :style="{ color: 'var(--ink-3)' }">chiots, adultes, sauvetage, obéissance</span>
            </li>
            <li>
              <strong :style="{ color: 'var(--ink)' }">Affilié ACT</strong><br>
              <span :style="{ color: 'var(--ink-3)' }">Rhône-Alpes</span>
            </li>
          </ul>
        </div>
      </div>

      <div :style="{ fontSize: '17px', lineHeight: '1.75', color: 'var(--ink-2)' }">
        <p :style="{ fontSize: '22px', fontFamily: 'var(--font-display)', color: 'var(--ink)', lineHeight: '1.4', fontStyle: 'italic' }">
          Notre club associatif est situé à Rillieux-la-Pape, sur un terrain boisé,
          ombragé, en pleine nature — et il fonctionne grâce à nos bénévoles.
        </p>
        <p :style="{ marginTop: '24px' }">
          Nous avons la chance d'avoir un <strong>terrain de détente</strong>, un <strong>terrain
          réservé aux chiots</strong>, et un <strong>grand terrain d'éducation</strong>.
        </p>
        <p :style="{ marginTop: '18px' }">
          Nous sommes affiliés à l'Association Canine Territoriale Rhône-Alpes.
        </p>
        <p :style="{ marginTop: '18px' }">
          Notre club a une belle histoire puisqu'il existe depuis 1959, ce qui fait de lui l'un
          des plus vieux clubs canins en Rhône-Alpes.
        </p>
      </div>
    </div>
  </section>
</template>
