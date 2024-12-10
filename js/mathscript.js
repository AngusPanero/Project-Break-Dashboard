const divResultado = document.getElementById("resultado")
const divGenerar = document.getElementById("generar")

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+";

const passAlea = () => {
    const divLongitud = document.getElementById("longitud").value // va aca dentro de la funcion si no siempre daria un valor igual (12)

    console.log("divLongitud:", divLongitud);

    if (divLongitud < 12 || divLongitud > 50){
        return
    }

    let contraseña = [
        mayusculas[Math.floor(Math.random() * mayusculas.length)],
        minusculas[Math.floor(Math.random() * minusculas.length)],
        numeros[Math.floor(Math.random() * numeros.length)],
        simbolos[Math.floor(Math.random() * simbolos.length)]
    ];

    console.log("PassWord Ale Array", contraseña)

    const caracteres = mayusculas + minusculas + numeros + simbolos;
    console.log("Todos los Caracteres:", caracteres)

    while (contraseña.length < divLongitud){
        const aletorio = caracteres[Math.floor(Math.random() * caracteres.length)]
        contraseña.push(aletorio)
        console.log("Aleatorio", aletorio);
    }

    contraseña = contraseña.sort(() => Math.random()).join(""); // join me une lo que seria una letra por cada posicion del value, sin los "" me dariatodo unido pero con ,

    console.log("Contraseña Aleatoria Unida", contraseña)

    divResultado.innerHTML = `Tu Nueva Pass Aleatoria con ${divLongitud} Digitos: ${contraseña}`
}

divGenerar.addEventListener("click", passAlea);