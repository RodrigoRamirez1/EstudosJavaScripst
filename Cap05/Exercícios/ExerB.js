/*Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. 
Elaborar um programa que leia o número inicial de chincilas e anos e informe ano a ano 
o número médio previsto de chinchilas da fazenda. O número inicial de chinchilas deve ser 
maior ou igual a 2 (um casal)*/

const prompt= require("prompt-sync")()
const chinchilas= Number(prompt("N° Chinchilas: "))
const anos= Number(prompt("N° Anos: "))

let resposta= ""
let total= chinchilas
for (let i= 1; i <= anos; i++) {
    resposta = resposta + i + "º Ano: " + total + " Chinchilas\n"
    total = total * 3
}
console.log(`${resposta}`)