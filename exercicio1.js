// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let n1 = parseFloat(prompt("Coloque a nota: "))
let n2 = parseFloat(prompt("Coloque a nota: "))
let n3 = parseFloat(prompt("Coloque a nota: "))
let n4 = parseFloat(prompt("Coloque a nota: "))

media = (n1 + n2 + n3 + n4) / 4

console.log (media)

if (media >= 7) {
    alert("Aprovado");

} else if (media >= 5){
    alert("Recuperação"); 
} else {
    alert ("Reprovado")
}
