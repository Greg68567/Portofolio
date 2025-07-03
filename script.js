document.addEventListener("DOMContentLoaded", function () {
  try {
    // Initialisation
    initPortfolio();
  } catch (error) {
    console.error("Erreur lors du chargement du portfolio:", error);
  }
});

function initPortfolio() {
  // Affiche la section About par défaut
  showSection("about");

  // Configuration des écouteurs d'événements
  setupEventListeners();
}

function setupEventListeners() {
  // Navigation principale
  const navButtons = document.querySelectorAll(".btn-modern[data-section]");
  if (navButtons.length === 0) {
    console.warn("Aucun bouton de navigation trouvé");
    return;
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      showSection(this.dataset.section);
    });
  });

  // Onglets de projets
  const projectTabs = document.querySelectorAll(
    ".project-tab[data-project-type]"
  );
  projectTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      showProjectType(this.dataset.projectType);
    });
  });
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  let sectionFound = false;

  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.add("active");
      sectionFound = true;
    } else {
      section.classList.remove("active");
    }
  });

  if (!sectionFound) {
    console.warn(`Section ${sectionId} introuvable`);
  }
}

function showProjectType(projectType) {
  // Onglets
  document.querySelectorAll(".project-tab").forEach((tab) => {
    const isActive = tab.dataset.projectType === projectType;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive);
  });

  // Contenu des projets
  document.querySelectorAll(".project-type").forEach((type) => {
    type.classList.toggle("active", type.id === projectType);
  });
}
