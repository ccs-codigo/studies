function messageEmailValidation() {
    const emailContent = document.getElementById("txtEmail").value.trim(); // Removendo espaços desnecessários
    const feedbackElement = document.querySelector("#newsletterFeedback");
    
    feedbackElement.innerHTML = ""; // Limpa o feedback anterior

    if (emailContent) {
        const messageElement = document.createElement("p"); // Criando o elemento <p>
        messageElement.className = "paragrafo-feedback";
        messageElement.textContent = `O email: ${emailContent} foi cadastrado com sucesso!`;

        feedbackElement.appendChild(messageElement); // Adiciona o elemento <p> ao final
    }
}
