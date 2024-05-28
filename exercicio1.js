// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.
// let usuário = prompt("Coloque seu usuario: ")
// let senha = prompt("Digite sua senha: ")

// console.log("Seja bem vindo " + usuário + "!!")
// console.log(senha)

// if (usuário == "admin") {
//     console.log("Você é Admin")

//    if (senha == "senha123") {
//         console.log("Seja bem vindo ADMIN!");
//    }

// } else {
//     console.log("Você não tem permiçao de acesso!")
// }

let tituloNome = document.querySelector("#Titulo-nome")

const MudarNome = () => {
    tituloNome.innerText = "Lucas Ferreira"
}

tituloNome.addEventListener("click", MudarNome)


function voltarPagina() {
    window.history.back()
}


function sairPagina() {
    window.close()
}