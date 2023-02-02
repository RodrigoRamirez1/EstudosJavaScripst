const prompt= require("prompt-sync")()
const ladoA= Number(prompt("Lado A: "))
const ladoB= Number(prompt("Lado B: "))
const ladoC= Number(prompt("Lado C: "))

if (ladoA == ladoB && ladoB == ladoC) {
    console.log("tipo: Equilátero")
} else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
    console.log("tipo: Escaleno")
} else {
    console.log("tipo: Isósceles")
}