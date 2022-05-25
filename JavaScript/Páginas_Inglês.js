const button = document.querySelector(".botao-newsletter")
const popup = document.querySelector(".fundo-popup")

button.addEventListener("click", () => {
    popup.style.display = "block"
})

popup.addEventListener("click", event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ["popup-close", "fundo-popup", "assinar-newsletter"]
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

    if (shouldClosePopup) {
        popup.style.display = "none"
    }
})

const inputEmail = document.querySelector("#email")
const erro = document.querySelector(".erro-email")

function validarEmail() {
    if(!inputEmail.checkValidity()) {
        erro.innerHTML = "Invalid email"        
    }
}

function redefinirMsg() {
    if(erro.innerHTML == "Invalid email") {
        erro.innerHTML = ""
    }
}

function validar() {
    var nome = formulario.nome;
    var email = formulario.email;

    if (nome.value == "" || email.value == "" || erro.innerHTML == "Invalid email") {
        alert ("The form is not complete")
    } else {
        alert ("Your subscription is complete")
    }
}

$(document).ready(function() {
    var botao = $('.perfil');
    var dropDown = $('.logout');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
const seta = document.querySelector(".seta-topo");

window.addEventListener("scroll", function(event) {
    if (window.scrollY == 0) {
        seta.classList.remove("visible");
    } else {
        seta.classList.add("visible");
    }
});