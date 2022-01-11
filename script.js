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
    document.querySelector("#submit-btn").disabled = true
    let confirmed = document.querySelector("#agreement")
    confirmed.addEventListener("click", function(evento){
        if (evento.target.checked == true) {
            document.querySelector("#submit-btn").disabled = false
        }
    }) 

    let count = document.querySelector("textarea");
    count.addEventListener("keyup", function(){
        let caract = document.querySelector("#counter")
        let qcaract = document.querySelector("textarea").value.length
        caract.innerHTML = 500 - qcaract
    })

    let btn2 = document.querySelector("#submit-btn")
    btn2.addEventListener("click", function (evento){
        evento.preventDefault()
        let form = document.querySelector("#evaluation-form")
        for (let pos of form) {
            let subst = document.createElement("p")
            subst.innerHTML = pos.value
            console.log(subst)
            form.appendChild(subst)
            if (pos != "p"){
                form.remove(pos)
            }
        } 
    })
}