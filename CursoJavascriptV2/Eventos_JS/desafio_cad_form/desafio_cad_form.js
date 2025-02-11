// Constantes para evitar "números mágicos" no código
const MAX_CHARACTERS = 255;
const WARNING_THRESHOLD = 100;
const CRITICAL_THRESHOLD = 10;
const MESSAGE_TIMEOUT = 5000;

// Função para validar o estado da checkbox e habilitar/desabilitar o botão
function toggleButtonState() {
  const checkBox = document.querySelector("#chk");
  const submitButton = document.querySelector(".btnAdd input");

  if (checkBox && submitButton) {
    submitButton.disabled = !checkBox.checked;
  }
}

// Função para validar o campo de título e exibir mensagem de erro
function validateInput() {
  const titleInput = document.querySelector(".titulo input");
  const messageElement = document.querySelector(".msgTop");

  if (!titleInput || titleInput.value.trim() === "") {
    if (!messageElement.classList.contains("msgVisible")) {
      messageElement.classList.add("msgVisible");
      setTimeout(() => {
        messageElement.classList.remove("msgVisible");
      }, MESSAGE_TIMEOUT);
    }
    return false;
  }
  return true;
}

(function () {
  "use strict";

  const titleInput = document.querySelector(".titulo input");
  const formCad = document.querySelector(".form");

  formCad.addEventListener("submit", function (e) {
    if (!titleInput.value) {
      e.preventDefault();
    }
    titleInput.focus();
  });
})();

// Função para atualizar o contador de caracteres
function updateCharacterCounter() {
  const textarea = document.getElementById("descTarefa");
  const counterElement = document.querySelector(".contCaracteres p");

  if (!textarea || !counterElement) return;

  const remainingCharacters = MAX_CHARACTERS - textarea.value.trim().length;
  counterElement.textContent = `${remainingCharacters} caracteres restantes.`;

  // Atualiza as classes com base nos limites
  if (
    remainingCharacters < WARNING_THRESHOLD &&
    remainingCharacters > CRITICAL_THRESHOLD
  ) {
    counterElement.className = "limitProx";
  } else if (remainingCharacters <= CRITICAL_THRESHOLD) {
    counterElement.className = "limitCarac";
  } else {
    counterElement.className = "limitOk";
  }
}

// Inicialização do contador de caracteres
function initCharacterCounter() {
  const textarea = document.getElementById("descTarefa");
  const counterElement = document.querySelector(".contCaracteres p");

  if (textarea && counterElement) {
    counterElement.textContent = `${MAX_CHARACTERS} caracteres restantes.`;
    textarea.addEventListener("input", updateCharacterCounter);
  }
}

// Inicialização do script
function init() {
  const checkBox = document.querySelector("#chk");
  if (checkBox) {
    checkBox.addEventListener("change", toggleButtonState);
  }

  initCharacterCounter();
}

// Executa a inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", init);
