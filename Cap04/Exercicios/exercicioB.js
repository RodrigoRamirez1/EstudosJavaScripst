const prompt= require("prompt-sync")()
const velocPermitida= Number(prompt("Velocidade Permitida: "))
const velocCondutor= Number(prompt("Velocidade do Condutor: "))

if (velocCondutor <= velocPermitida) {
    console.log("Sem Multa")
} else {
    const maisVinte= velocPermitida*1.2
    if (velocCondutor <= maisVinte) {
        console.log("Multa Leve")
    } else {
        console.log("Multa Grave")
    }
}
