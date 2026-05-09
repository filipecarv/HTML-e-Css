// fazer um menu mais responsivo
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".list-menu").classList.toggle("show");
});

// rolagem suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Para verificar se estou na pag inicial
const isIndexPage =
  window.location.pathname.endsWith("index.html") ||
  window.location.pathname === "/";

if (isIndexPage) {
  window.onload = function () {
    // Verifica se a mensagem já foi exibida
    const hasSeenWelcomeMessage = localStorage.getItem("hasSeenWelcomeMessage");

    if (!hasSeenWelcomeMessage) {
      // Mostra a mensagem
      setTimeout(() => {
        alert("Bem-vindo à Toca Do Sabor!");
        // marcar a msg pro computador entender que ja foi exibida
        localStorage.setItem("hasSeenWelcomeMessage", "true");
      }, 1000);
    }
  };
}

// Formulário de Avaliação (sem data base ainda!)
function validateForm() {
  const name = document.querySelector("#name").value;
  const feedback = document.querySelector("#feedback").value;
  if (name === "" || feedback === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  alert("Obrigado pelo seu feedback!");
  return true;
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 2000);
