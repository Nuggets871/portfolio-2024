document.querySelectorAll(".lien_a_propos").forEach(function (element) {
  element.addEventListener("click", toA_Propos);
});

document.querySelectorAll(".lien_projets").forEach(function (element) {
  element.addEventListener("click", toProjets);
});

document.querySelectorAll(".lien_competences").forEach(function (element) {
  element.addEventListener("click", toCompetences);
});

document.querySelectorAll(".lien_contact").forEach(function (element) {
  element.addEventListener("click", toContact);
});
document.querySelectorAll(".lien_linkedin").forEach(function (element) {
  element.addEventListener("click", toLinkedin);
});
document.getElementById("menu-open").addEventListener("click", ouvrir_menu);

document.getElementById("menu-close").addEventListener("click", fermer_menu);
document.querySelector(".lien_github").addEventListener("click", toGithub);
document.querySelector(".lien_email").addEventListener("click", toEmail);
function toA_Propos() {
  document.getElementById("a_propos").scrollIntoView();
  fermer_menu();
}

function toProjets() {
  document.getElementById("projets").scrollIntoView();
  fermer_menu();
}

function toCompetences() {
  document.getElementById("competences").scrollIntoView();
  fermer_menu();
}

function toContact() {
  document.getElementById("contact").scrollIntoView();
  fermer_menu();
}

function toLinkedin() {
  window.open("https://www.linkedin.com/in/christopher-bondier-15884623a/");
}

function ouvrir_menu() {
  document.getElementById("sidebar").style.right = "0";
}

function fermer_menu() {
  document.getElementById("sidebar").style.right = "-100%";
}

function toEmail() {
  window.location.href = "mailto:christopherbondier@gmail.com";
}

function toGithub() {
  window.open("https://github.com/Nuggets871?tab=repositories");
}
