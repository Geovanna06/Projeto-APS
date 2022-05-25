function validar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin" && senha == "unip"){
        location.href = "Página Inicial/PaginaInicial.html"
    }else{
        alert ("Usuário ou senha incorretos");
    }
}