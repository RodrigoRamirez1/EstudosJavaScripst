const prompt= require("prompt-sync")()
const valor= Number(prompt("Valor R$: "))

if (valor <= 1.00) {
    console.log("Valor Insuficiente, no mínino 1.00")
    return
} 

if (valor >= 3.00) {
    let tempo
    let troco
    tempo= 120
    troco= valor - 3.00
    console.log(`Tempo: ${tempo}min // Troco: R$: ${troco.toFixed(2)}`)
} else if (valor >= 1.75) {
    tempo= 60
    troco= valor - 1.75
    console.log(`Tempo: ${tempo}min // Troco: R$: ${troco.toFixed(2)}`)
} else {
    tempo= 30
    troco= valor - 1.00
    console.log(`Tempo: ${tempo}min // Troco: R$: ${troco.toFixed(2)}`)
}