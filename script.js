window.onload = function (){
    let btnEnviar = document.querySelector("#entrar")
    btnEnviar.addEventListener("click", function (evento) {
        evento.preventDefault()
        let email = document.querySelector("[name=email]")
        let password = document.querySelector("[name=password]")
        if (email.value == "tryber@teste.com" && password.value == "123456") {
            alert("Olá, Tryber!")
        } else {
            alert("Email ou senha inválidos.")
        }
    })
}