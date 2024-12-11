const linksImp = document.getElementById("linksImp")
const nombreUrl = document.getElementById("nombreUrl");
const url = document.getElementById("url");
const boton = document.getElementById("boton");

const linksLocalStorage = (nombre, enlace) => {
    const guardarLinks = JSON.parse(localStorage.getItem("links"))|| []
    guardarLinks.push({nombre, enlace})
    localStorage.setItem("links", JSON.stringify(guardarLinks));
    console.log("Este es el GuardarLinks:", guardarLinks)
}

const cargarLinks = () => {
    const guardarLinks = JSON.parse(localStorage.getItem("links"))|| []
    guardarLinks.forEach(link => {
        linksImp.innerHTML += `
    <a class="vinculos" href="${link.enlace}"><p>${link.nombre}</p></a>
    `
    })
}

boton.addEventListener("click", () => {
    const nombre = nombreUrl.value.trim();
    const enlace = url.value.trim();

    let guardarLinks = JSON.parse(localStorage.getItem("links")) || [];
    let existe = guardarLinks.some((link) => link.enlace === enlace);

    if(existe){
        alert("Este Link Ya Existe")
    } else{

    linksImp.innerHTML += `
    <a class="vinculos" href="${enlace}"><p>${nombre}</p></a>
    `
    linksLocalStorage(nombre, enlace)
    console.log("Nombre:", nombre, "Enlace:", enlace);
    }
})

cargarLinks()
