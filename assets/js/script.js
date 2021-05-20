 /*
 Acessar elementos
 - Por Tag: getElementByTagName()
 - Por Id: getElementById()
 - Por Nome: getElementsByName()
 - Por Classe: getElementsByClassName
 - Pot Seletor: querySelector()

 JS é uma linguagem case sensitive! 
 */

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let texto = document.querySelector("#corpo")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let imagem = document.querySelector("#imagem")


nome.style.width = "30%"
email.style.width = "30%"
assunto.style.width = "30%"
texto.style.width = "30%"



function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto longo. Máximo de 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        assuntoOk = false
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar!")
    }
}

function zoom() {
    imagem.style.width = "1280px"
    imagem.style.height = "265px"
}

function normal() {
    imagem.style.width = "1260px"
    imagem.style.height = "257px"
}

