const prompt= require("prompt-sync")()
const peso= Number(prompt("Peso da Ração (Kg): " ))
const consumo= Number(prompt("Consumo Diário (gr): "))

const pesoGr= peso*1000
const duracao= Math.floor(pesoGr/consumo)
const sobra= pesoGr % consumo

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)