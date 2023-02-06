
// ---------EXEMPLO EXERCICIO 5.1-----------

/*const frm= document.querySelector("form")
const resp= document.querySelector("pre")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero= Number(frm.inNumero.value)
    let resposta= ""
    for (let i=1; i<=10;i++) {
        resposta= resposta + numero + "x" + i + "=" + (numero*i) + "\n"
    }
    resp.innerText= resposta

})*/




// -----------EXEMPLO EXERCICIO 5.2-------------

const frm= document.querySelector("form")
const resp= document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero= Number(frm.inNumero.value)
    let resposta= `Entre ${numero} e 1: `
    for(let i= numero; i > 0; i = i - 1){
        resposta= resposta + i + ","
    }
    resp.innerText= resposta
})