/*Elaborar um programa que leia o nome de uma fruta e um número. 
O prgrama deve repetir a exibição do nome da fruta, de acordo com o número informado. 
Utilize o "*" para separar os nomes.*/

const prompt= require("prompt-sync")()
const fruta= prompt("Fruta: ")
const num= Number(prompt("Número: "))

let resposta= ""

for (let i = 1; i < num; i++) {
    resposta= resposta + fruta + "*"
}
console.log(`${resposta + fruta}`)