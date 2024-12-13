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
<p class="pHora">Hora: ${horasFormat}:${minutosFormat}:${segundosFormat}</p>
`
divFecha.innerHTML = `
<p class="pHora">fecha: ${dias}/${meses}/${año}</p>
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

divFrase.innerHTML = `<p class="pHora">${mensajePantalla}</p>`;
}

setInterval(actualizarHoraFecha, 1000);
actualizarHoraFecha()

