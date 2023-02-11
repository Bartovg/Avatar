const sectionSeleccionarAtaque = document.getElementById("Elegir-Ataque")
const sectionReiniciar = document.getElementById("Reiniciar")
const sectionCombate = document.getElementById("COMBATE")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("Seleccionar-Mascota")

const spanMascotaJugador = document.getElementById("monster-jugador")
const spanMascotaEnemigo = document.getElementById("monster-enemigo")
const imagenEnemigo = document.getElementById("imagen-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenerdorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let avatares = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeAvatares
let imagenJugador
let inputAang
let inputAzula
let inputKatara
let inputSokka
let inputToph
let inputZuko
let avatarJugador
let ataquesAvatar
let ataquesAvatarEnemigo
let botonFuego 
let botonAgua
let botonTierra
let botonAire
let botonTrueno
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Avatar {
    constructor(nombre, foto, vida) {
        this. nombre = nombre
        this. foto = foto
        this. vida = vida
        this. ataques = []
    }
}

let Aang = new Avatar ('Aang','./assets/Aang.png', 5)
let Azula = new Avatar ('Azula','./assets/Azula.png', 5)
let Katara = new Avatar ('Katara','./assets/Katara.png', 5)
let Sokka = new Avatar ('Sokka','./assets/Sokka.png', 5)
let Toph = new Avatar ('Toph','./assets/toph.png', 5)
let Zuko = new Avatar ('Zuko','./assets/Zuko.png', 5)

Katara.ataques.push(
    {nombre: 'Agua 🌊', id: 'boton-agua'},
    {nombre: 'Agua 🌊', id: 'boton-agua'},
    {nombre: 'Agua 🌊', id: 'boton-agua'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Tierra ⛰️', id: 'boton-tierra'},
)

Zuko.ataques.push(
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Agua 🌊', id: 'boton-agua'},
    {nombre: 'Trueno ⚡', id: 'boton-trueno'},
)

Toph.ataques.push(
    {nombre: 'Tierra ⛰️', id: 'boton-tierra'},
    {nombre: 'Tierra ⛰️', id: 'boton-tierra'},
    {nombre: 'Tierra ⛰️', id: 'boton-tierra'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Agua 🌊', id: 'boton-agua'},
  
)

Sokka.ataques.push(
    {nombre: 'Agua 🌊', id: 'boton-agua'},
    {nombre: 'Agua 🌊', id: 'boton-agua'},
    {nombre: 'Trueno ⚡', id: 'boton-trueno'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Tierra ⛰️', id: 'boton-tierra'},

)

Azula.ataques.push(
    {nombre: 'Trueno ⚡', id: 'boton-trueno'},
    {nombre: 'Trueno ⚡', id: 'boton-trueno'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Tierra ⛰️', id: 'boton-tierra'},
)

Aang.ataques.push(
    {nombre: 'Aire 🍃', id: 'boton-aire'},
    {nombre: 'Aire 🍃', id: 'boton-aire'},
    {nombre: 'Tierra ⛰️', id: 'boton-tierra'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Agua 🌊', id: 'boton-agua'}, 
)

avatares.push(Aang,Azula,Katara,Sokka,Toph,Zuko)

function iniciarjuego() {
   
    sectionSeleccionarAtaque.style.display = "none"

    avatares.forEach((avatar) => {
        opcionDeAvatares = `
            <input type="radio" name="mascota" id=${avatar.nombre} />
            <label class = "tarjeta-de-monster" for=${avatar.nombre}>
            <p>${avatar.nombre}</p>
            <img src=${avatar.foto} alt=${avatar.nombre}>
            </label>
        `
        contenerdorTarjetas.innerHTML += opcionDeAvatares

        imagenJugador = document.getElementById("imagen-jugador")
        inputAang = document.getElementById("Aang")
        inputAzula = document.getElementById("Azula")
        inputKatara = document.getElementById("Katara")
        inputSokka = document.getElementById("Sokka")
        inputToph = document.getElementById("Toph")
        inputZuko = document.getElementById("Zuko")
    })
    
    sectionReiniciar.style.display = "none"
    sectionCombate.style.display = "none"

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = "none"
    
    sectionSeleccionarAtaque.style.display = "flex"

    sectionCombate.style.display = "flex"

    
    if (inputAang.checked) {
        spanMascotaJugador.innerHTML= inputAang.id
        avatarJugador = inputAang.id
        imagenJugador.setAttribute("src", "./assets/Aang.png")
        imagenJugador.setAttribute("alt", "Aang")
    } else if (inputAzula.checked) {
        imagenJugador.setAttribute("src", "./assets/Azula.png")
        imagenJugador.setAttribute("alt", "Azula")
        spanMascotaJugador.innerHTML=inputAzula.id
        avatarJugador = inputAzula.id
    } else if (inputKatara.checked) {
        imagenJugador.setAttribute("src", "./assets/Katara.png")
        imagenJugador.setAttribute("alt", "Katara")
        spanMascotaJugador.innerHTML=inputKatara.id
        avatarJugador = inputKatara.id
    }  else if (inputSokka.checked) {
        imagenJugador.setAttribute("src", "./assets/Sokka.png")
        imagenJugador.setAttribute("alt", "Sokka")
        spanMascotaJugador.innerHTML=inputSokka.id
        avatarJugador = inputSokka.id
    }   else if (inputToph.checked) {
        imagenJugador.setAttribute("src", "./assets/toph.png")
        imagenJugador.setAttribute("alt", "toph")
        spanMascotaJugador.innerHTML=inputToph.id
        avatarJugador = inputToph.id
    }   else if (inputZuko.checked) {
        imagenJugador.setAttribute("src", "./assets/Zuko.png")
        imagenJugador.setAttribute("alt", "Zuko")
        spanMascotaJugador.innerHTML=inputZuko.id
        avatarJugador = inputZuko.id
    }   else {
        alert("DEBES ELEGIR UN AVATAR")
    }

    extraerAtaques(avatarJugador)
    seleccionarMascotaEnemigo()
}


function extraerAtaques(avatarJugador) {
    let ataques
    for (let i = 0; i < avatares.length; i++) {
        if (avatarJugador === avatares[i].nombre) {
            ataques = avatares[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
    
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesAvatar=`
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesAvatar
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botonAire = document.getElementById('boton-aire')
    botonTrueno = document.getElementById('boton-trueno')
    botones = document.querySelectorAll('.BAtaque')  
}
    


function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === 'Fuego 🔥') {
                ataqueJugador.push ('Fuego 🔥')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
            } else if (e.target.textContent === 'Agua 🌊') {
                ataqueJugador.push ('Agua 🌊')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
            } else if (e.target.textContent === 'Tierra ⛰️') {
                ataqueJugador.push ('Tierra ⛰️')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
            } else if (e.target.textContent === 'Trueno ⚡') {
                ataqueJugador.push ('Trueno ⚡')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
            } else { 
                ataqueJugador.push ('Aire 🍃')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
            }

            ataqueAleatorioEnemigo()
        })
    } )   
}



function seleccionarMascotaEnemigo (){

    let monsterAleatorio = aleatorio(0, avatares.length - 1)
    
    if (monsterAleatorio == 1){
        spanMascotaEnemigo.innerHTML="Katara "
        imagenEnemigo.setAttribute("src", "./assets/Katara2.png")
        imagenEnemigo.setAttribute("alt", "Katara")
    } else if (monsterAleatorio == 2){
        imagenEnemigo.setAttribute("src", "./assets/Zuko2.png")
        imagenEnemigo.setAttribute("alt", "Zuko")
        spanMascotaEnemigo.innerHTML="Zuko "
    } else if (monsterAleatorio == 3) {
        imagenEnemigo.setAttribute("src", "./assets/toph2.png")
        imagenEnemigo.setAttribute("alt", "toph")
        spanMascotaEnemigo.innerHTML="Toph "
    } else if (monsterAleatorio == 4){
        imagenEnemigo.setAttribute("src", "./assets/Sokka2.png")
        imagenEnemigo.setAttribute("alt", "Sokka")
        spanMascotaEnemigo.innerHTML="Sokka "
    } else if (monsterAleatorio == 5){
        imagenEnemigo.setAttribute("src", "./assets/Azula2.png")
        imagenEnemigo.setAttribute("alt", "Azula")
        spanMascotaEnemigo.innerHTML="Azula "
    } else {
        imagenEnemigo.setAttribute("src", "./assets/Aang2.png")
        imagenEnemigo.setAttribute("alt", "Aang")
        spanMascotaEnemigo.innerHTML="Aang "
    }
    ataquesAvatarEnemigo = avatares [monsterAleatorio].ataques
    secuenciaAtaque()
}



function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesAvatarEnemigo.length -1)

    if (ataqueAleatorio == 0) {
        ataqueEnemigo.push('Fuego 🔥')
    } else if (ataqueAleatorio == 1){
        ataqueEnemigo.push('Agua 🌊')
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo.push('Tierra ⛰️')
    } else if (ataqueAleatorio == 3){
        ataqueEnemigo.push('Trueno ⚡')
    } else {
        ataqueEnemigo.push ('Aire 🍃')
    }

    console.log(ataqueEnemigo)

    iniciarPelea()
    
}

function iniciarPelea(){
    if (ataqueJugador.length ===5){
        COMBATE()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function COMBATE() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje ("EMPATE")
        } else if (ataqueJugador[index] == 'Fuego 🔥' && ataqueEnemigo[index] == 'Tierra ⛰️' ) {
            indexAmbosOponentes(index , index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] == 'Agua 🌊' && ataqueEnemigo[index] == 'Fuego 🔥' ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] == 'Tierra ⛰️' && ataqueEnemigo[index] == 'Agua 🌊' ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] == 'Fuego 🔥' && ataqueEnemigo[index] == 'Trueno ⚡' ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] == 'Agua 🌊' && ataqueEnemigo[index] == 'Aire 🍃' ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] == 'Tierra ⛰️' && ataqueEnemigo[index] == 'Trueno ⚡' ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] == 'Trueno ⚡' && ataqueEnemigo[index] == 'Aire 🍃' ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] == 'Aire 🍃' && ataqueEnemigo[index] == 'Fuego 🔥' ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] == 'Trueno ⚡' && ataqueEnemigo[index] == 'Agua 🌊' ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] == 'Aire 🍃' && ataqueEnemigo[index] == 'Tierra ⛰️' ) {
            indexAmbosOponentes(index, index)
            crearMensaje ("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else {
            indexAmbosOponentes(index, index)
            crearMensaje ("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }

    revisarVIdas()
}

function revisarVIdas(){
    if (victoriasJugador === victoriasEnemigo){
    crearMensajeFinal("EMPATE 🤡")
} else if (victoriasJugador>victoriasEnemigo){
    crearMensajeFinal("GANASTE!🏆")
} else{
    crearMensajeFinal("HAS MUERTO!💀")
}

}

function crearMensaje(resultado){
   
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    
    sectionMensajes.innerHTML= resultado
    nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal){
   
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = "block"

}
function reiniciarJuego(){
    location.reload()
}


function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load" , iniciarjuego)