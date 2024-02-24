let intentos = 0
let numeroSecreto = 0
let listaNumerosSorteados = []
let numeroMaximo = 10

function asignarTexto(elemento , texto) {
    let objetoHtml = document.querySelector(elemento)
    objetoHtml.innerHTML = texto
}
condicionesIniciales()
function condicionesIniciales(){
    asignarTexto("h1" , "juego del numero secreto")
    asignarTexto("p" , `ingrese un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = asignarNumeroSecreto()
    intentos = 1
}

function asignarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTexto("p","ya se asignaron todos los numero posibles")
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return asignarNumeroSecreto()
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

function limpiarCaja() {
    document.getElementById("numeroUsuario").value = ""
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value)
    if (numeroUsuario === numeroSecreto){
        asignarTexto("p",`acertaste el numero secreto en ${intentos} ${(intentos == 1 ? "intento" : "intentos")}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    }
    else {
        if (numeroUsuario > numeroSecreto) {
        asignarTexto("p","el número secreto es menor")
        }
        else {
            asignarTexto("p","el número secreto es mayor")
        }
        intentos ++
        limpiarCaja()
    }
    return
}

function reiniciarJuego(){
    limpiarCaja()
    condicionesIniciales()
    numeroSecreto = asignarNumeroSecreto()
    document.getElementById("reiniciar").setAttribute("disabled","true")

}