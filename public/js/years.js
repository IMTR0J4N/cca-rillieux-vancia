document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  // Vérifie si la date actuelle est avant ou après le 1er septembre
  const isAfterSeptember = today >= new Date(currentYear, 8, 1); // Mois 8 = septembre (indexé à partir de 0)
  
  // Ajuste les années en conséquence
  const startYear = isAfterSeptember ? currentYear : currentYear - 1;
  const endYear = startYear + 1;

  // Met à jour les contenus dynamiques
  document.getElementById("year-range").textContent = `${startYear} - ${endYear}`;
  document.getElementById("next-year").textContent = endYear;
});
