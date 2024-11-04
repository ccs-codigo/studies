const email = document.getElementById("txtEmail") // email
// const elementoFeedBack = document.querySelector("#newsletterFeedback") //elemento pai selecionado
const elementoFeedBack = document.getElementById("newsletterFeedback") //elemento pai selecionado

function cadastrarEmail() {

    elementoFeedBack.innerHTML = ""
    let emailValue = email.value

    if (emailValue) {
        // const messageElementoFeedback = document.createElement("p") //elemento <p> criado    
        // messageElementoFeedback.className = "paragrafo-feedback" //classe criada no element <p>
        // messageElementoFeedback.innerHTML = `O email: ${email} foi cadastrado com sucesso!`

        // elementoFeedBack.insertBefore(messageElementoFeedback, null)
        elementoFeedBack.innerHTML = `<p> O email: ${emailValue} foi cadastrado com sucesso!</p>`
    } else {
        alert('Preencha o campo "Email" para cadastrar um email!')
    }

}

// const txtEmail = document.getElementById("txtEmail")
// const msgFeedback = document.getElementById("newsletterFeedback")

// function cadastrarEmail() {
//     let email = txtEmail.value
//     msgFeedback.innerHTML = `O email ${email} foi cadastrado`
// }

function editarEmail() {
    email.disabled = false
    email.focus()
}

function disabledEmail() {
    email.disabled = true
}