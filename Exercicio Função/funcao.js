// Fazer um menu de exercícios utilizando exemplos dado em aula. Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercício ele quer visualizar.
// O usuário deverá digitar 0 para sair do menu.     



// let opcao = prompt("Escolha qual exercicio quer realizar: \n1 - Exemplo Hello Word\n2 - Exemplo repretição")

// switch (opcao) {
//     case "1":
//         console.log("Hello Word")
//         break;

//         case "2":

//             break;
//     default:
//         break;
// }

let opcao;
do {
     opcao = prompt("Escolha qual exercicio quer realizar: \n\n1 \n2 \n3 \n4 \n5 \n6 \n0.(Digite `0` para sair)")
    switch (opcao) {
        case "1":
            console.log("1. Imprimir números de 1 a 10 utilizando o loop for");
            for (let contador = 1; contador <= 10; contador++) {
                console.log(contador);
            }
            break;
        case "2":
            console.log("2. Imprimir números pares de 1 a 10.");
            for (let contador = 2; contador <= 10; contador += 2) {
                console.log(contador)
            }
            break;
        case "3":
            console.log("3. Faça um programa que imprima os números ímpares de 0 a 50");
            for (let contador = 1; contador <= 50; contador += 2) {
                console.log(contador)
            }
            break;
        case "4":
            console.log("4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.");
            let numero = parseInt(prompt("Qual tabuada quer ver?"))
            if (!isNaN(numero)) {
                console.log("Tabuada do " + numero + ":")
                for (let i = 1; i <= 10; i++) {
                    console.log(numero + " x " + i + " = " + numero * i)
                }
            }
            else {
                console.log("Por favor, insira um número válido.")
            }
            break;
        case "5":
            console.log("5.Imprimir os primeiros 10 números da sequência de Fibonacci.");
            let fibonacci = [0, 1];
    
            for (let i = 2; i < 10; i++) {
                fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            }
    
            console.log('Os 10 números da sequência de Fibonacci são:');
            fibonacci.forEach(num => console.log(num));
            break;
    
            case"6":
            console.log("6. Imprimir números pares de 0 a 20 utilizando o loop while");
            break;
    
        default:
            break;
    }

} while (opcao != "0");
0



