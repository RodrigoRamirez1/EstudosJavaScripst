const prompt= require("prompt-sync")()
const numero= Number(prompt("Número: "))
if (numero % 2 == 0) {
    console.log("Par")
} else {
    console.log("Ímpar")
}