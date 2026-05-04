<template>
  <footer class="cca-footer">
    <div class="cca-footer__brand">
      <div class="mark">c</div>
      <div :style="{ fontFamily: 'var(--font-display)', fontSize: '18px', color: '#fbf7ef' }">
        Club du chien<br>d'accompagnement
      </div>
      <div :style="{ fontSize: '12px', color: '#c8c0a8', lineHeight: '1.6' }">
        Association loi 1901<br>
        Affiliée ACT Rhône-Alpes
      </div>
    </div>
    <div>
      <h3>Contactez-nous</h3>
      <ul>
        <li>☎ &nbsp; 06 11 13 03 52</li>
        <li>✉ &nbsp; cca.vancia.secretariat@gmail.com</li>
        <li>📍 1180 Chem. de Sathonay Village, 69140</li>
      </ul>
    </div>
    <div>
      <h3>Le club</h3>
      <ul>
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/tarifs-horaires">Tarifs &amp; Horaires</NuxtLink></li>
        <li><NuxtLink to="/histoire">Histoire du club</NuxtLink></li>
        <li><NuxtLink to="/equipe">L'équipe</NuxtLink></li>
      </ul>
    </div>
    <div class="cca-footer__bottom">
      <span>© 2026 CCA Rillieux-Vancia · Association fondée en 1959</span>
      <span>Affiliés à l'Association Canine Territoriale Rhône-Alpes</span>
    </div>
  </footer>
</template>
