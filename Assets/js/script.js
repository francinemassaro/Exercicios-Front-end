
// var - variavel de escopo global
// let - escopo local
// const - de escopo global mas constante
// elas nao tem tipo. 

/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
                
                //Criando essas variaveis depois para envio do formulário
                let nomeOk = false
                let emailOk = false
                let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width='100%'
email.style.width='100%'
assunto.style.width='100%'

/* VALIDA NOME, SE O NOME FOR MENOR QUE 3, ALERTA) */
function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color= 'red'
    }    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color='green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    
    //indexOf mostra se existe ou não o caracter
    // ele dá 1 se tiver e -1 se não tiver
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.')== -1){
        txtEmail.innerHTML= 'E-mail inválido'
        txtEmail.style.color ='red'
    } else {
        txtEmail.innerHTML= 'E-mail válido'
        txtEmail.style.color ='green'
        emailOk=true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML= 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color='red'
        //textAssunto.style.display = 'block'
    } else {
        textEmail.innerHTML = ''
        //txtAssunto.style.display = 'none'
        assuntoOk=true
    }
}

function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk==true)
    alert ('Formulário enviado com sucesso')
    else {
        alert ('Preencha o formulário corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '700px'
    mapa.style.height = '600px'
}
function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
