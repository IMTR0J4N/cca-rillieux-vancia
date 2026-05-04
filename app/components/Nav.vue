<script setup lang="ts">
const route = useRoute()

const links = [
  { name: "Accueil", url: "/" },
  { name: "Tarifs & Horaires", url: "/tarifs-horaires" },
  { name: "Histoire du club", url: "/histoire" },
  { name: "L'équipe", url: "/equipe" },
]

function isActive(url: string) {
  if (url === "/") return route.path === "/"
  return route.path.startsWith(url)
}
</script>

<template>
  <nav class="cca-nav">
    <div class="cca-nav__brand">
      <NuxtLink to="/" class="cca-nav__mark">
        <img src="/assets/logo.svg" alt="CCA" style="width:100%;height:100%;filter:brightness(0)invert(1)" />
      </NuxtLink>
      <div class="cca-nav__name">
        Club du chien d'accompagnement
        <small>Rillieux-Vancia · Depuis 1959</small>
      </div>
    </div>
    <div style="display:flex;align-items:center">
      <ul class="cca-nav__links">
        <li v-for="l in links" :key="l.name">
          <NuxtLink :to="l.url" :class="{ 'is-active': isActive(l.url) }">{{ l.name }}</NuxtLink>
        </li>
      </ul>
      <div class="cca-nav__contact">
        <a href="mailto:cca.vancia.secretariat@gmail.com" title="Email">✉</a>
        <a href="tel:0611130352" title="Téléphone">☎</a>
      </div>
    </div>
  </nav>
</template>
