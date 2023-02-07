/*Elaborar um programa que leia um número e verifique se ele é ou não perfeito. 
Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto
o próprio número). O programa deve exibir os divisores do número e a soma deles.*/

const prompt= require("prompt-sync")()
console.log("--------------<<<<< Programa Números Perfeitos >>>>>-------------------")
console.log("-----------------------------------------------------------------------")
const num= Number(prompt("Número: "))

let divisores = "Divisores do " + num + ": 1"
let soma = 1

for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      divisores = divisores + ", " + i
      soma = soma + i
    }
  }
  divisores = divisores + " (Soma: " + soma + ")"
  console.log(`${divisores}`)

  if (num == soma) {
    console.log(`${num} É um Número Perfeito`)
  } else {
    console.log(`${num} Não É um Número Perfeito`)
  }
