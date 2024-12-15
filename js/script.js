const divHoras = document.getElementById("reloj24")
const divFecha = document.getElementById("fecha")
const divFrase = document.getElementById("frase")

const actualizarHoraFecha = () => {
let ahora = new Date()
let horas = ahora.getHours()
let minutos = ahora.getMinutes()
let segundos = ahora.getSeconds()
let dias = ahora.getDate()
let meses = ahora.getMonth() +1
let año = ahora.getFullYear()

let horasFormat = String(horas).padStart(2, "0");
let minutosFormat = String(minutos).padStart(2, "0");
let segundosFormat = String(segundos).padStart(2, "0");

divHoras.innerHTML = `
<p class="pHora">${horasFormat}:${minutosFormat}:${segundosFormat}</p>
`
divFecha.innerHTML = `
<p class="pFecha">${dias}.${meses}.${año}</p>
`

let mensajePantalla = "";

if (ahora.getHours() >= 0 && ahora.getHours() <= 7) {
    mensajePantalla = "Es hora de descansar. Apaga y sigue mañana";

} else if (ahora.getHours() >= 7 && ahora.getHours() <= 12) {
    mensajePantalla = "Buenos días, desayuna fuerte y a darle al código";
} 
else if (ahora.getHours() >= 12 && ahora.getHours() <= 14) {
    mensajePantalla = "Echa un rato más pero no olvides comer";
} 
else if (ahora.getHours() >= 14 && ahora.getHours() <= 16) {
    mensajePantalla = "Espero que hayas comido";
} 
else if (ahora.getHours() >= 16 && ahora.getHours() <= 18) {
    mensajePantalla = "Buenas tardes, el último empujón";
} 
else if (ahora.getHours() >= 18 && ahora.getHours() <= 22) {
    mensajePantalla = "Esto ya son horas extras, ... piensa en parar pronto";
} 
else {
    mensajePantalla = "Buenas noches, es hora de pensar en parar y descansar";
}

divFrase.innerHTML = `<p class="pFrase">${mensajePantalla}</p>`;
}

setInterval(actualizarHoraFecha, 1000);
actualizarHoraFecha()

const imganesDeFonsdo = [
    'img/animals-3483162.jpg',
    'img/architecture-1297680.jpg',
    'img/cat-1584965.jpg',
    'img/drei-zinnen-4530237.jpg',
    'img/fichtelbergbahn-8049565.jpg',
    'img/lion-2647556.jpg',
    'img/nature-3463957.jpg',
    'img/penguin-2203693.jpg',
    'img/river-6858013.jpg',
    'img/shark-674867.jpg',
    'img/snow-leopard-1985510.jpg',
    'img/stream-6564840.jpg',
    'img/winter-4026451.jpg',
    'img/winter-9249426.jpg'
]

let indiceActual = 0

const funcionCambiarFondo = () => {
    document.body.style.backgroundImage = `url(${imganesDeFonsdo[indiceActual]})`
    indiceActual = (indiceActual + 1 ) % imganesDeFonsdo.length // me divide hasta quedar de vuelta en cero (funciona tipo bucle)
}

funcionCambiarFondo()
setInterval(funcionCambiarFondo, 10000);