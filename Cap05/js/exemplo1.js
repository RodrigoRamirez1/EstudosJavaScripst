const prompt= require("prompt-sync")()

let numeros= Number(prompt("Insira um número: "))
for (let i=1; i < 4; i=i+1) {
    numeros = numeros + i
    console.log(`resultado ${numeros}`)
}