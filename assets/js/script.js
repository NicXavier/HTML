/*
Case Sensitive

por Tag: getElementByName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClass()
por Seletor: querySelector()

*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validateName ()
{
    let txtName = document.querySelector("#txtName")
    if (nome.value.length < 3)
    {
        txtName.innerHTML = "Nome inválido!"
        txtName.style.color = "red"   
    }
    else
    {
        txtName.innerHTML = "Nome válido!"
        txtName.style.color = "green"
        nomeOk = true
    }
}

function validateEmail ()
{
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)
    {
        txtEmail.innerHTML = "Email inválido!"
        txtEmail.style.color = "red"
        
    }
    else
    {
        txtEmail.innerHTML = "Email válido!"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validateAssunto ()
{
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length > 100)
    {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres."
        txtEmail.style.color = "red"
    }
    else
    {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function send ()
{
    if (nomeOk == true && emailOk == true && assuntoOk == true)
    {
        alert ("Formulário enviado com sucesso!")
    }
    else
    {
        alert ("Preencha o formulário corretamente antes de enviar!")
    }
}

function mapaZoom()
{
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal()
{
    mapa.style.width = "800px"
    mapa.style.height = "600px"  
}