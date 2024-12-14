const linksImp = document.getElementById("linksImp");
const nombreUrl = document.getElementById("nombreUrl");
const url = document.getElementById("url");
const boton = document.getElementById("boton");

const linksLocalStorage = (nombre, enlace) => {
    let guardarLinks = JSON.parse(localStorage.getItem("links")) || [];
    guardarLinks.push({ nombre, enlace });
    localStorage.setItem("links", JSON.stringify(guardarLinks));
    console.log("Este es el GuardarLinks:", guardarLinks);
};

const cargarLinks = () => {
    linksImp.innerHTML = "";
    const guardarLinks = JSON.parse(localStorage.getItem("links")) || [];
    guardarLinks.forEach(link => {
        linksImp.innerHTML += `
            <div class="cadaLink">
                <a class="vinculos" href="${link.enlace}" target="_blank"><p>${link.nombre}</p></a>
                <button class="botonBorrar">x</button>
            </div>
        `;    
    });
};

boton.addEventListener("click", () => {
    const nombre = nombreUrl.value.trim();
    const enlace = url.value.trim();

    let guardarLinks = JSON.parse(localStorage.getItem("links")) || [];
    let existe = guardarLinks.some((link) => link.enlace === enlace);

    if (existe) {
        alert("Este Link Ya Existe");
    } else {
        linksImp.innerHTML += `
            <div class="cadaLink">
                <a class="vinculos" href="${enlace}" target="_blank"><p>${nombre}</p></a>
                <button class="botonBorrar">x</button>
            </div>    
        `;
        linksLocalStorage(nombre, enlace);
    }
});

linksImp.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("botonBorrar")) {
        const boton = evento.target;
        const contenedor = boton.parentElement;
        const enlace = contenedor.querySelector(".vinculos").href;

        contenedor.remove();

        let guardarLinks = JSON.parse(localStorage.getItem("links")) || [];
        guardarLinks = guardarLinks.filter(link => link.enlace !== enlace);
        localStorage.setItem("links", JSON.stringify(guardarLinks));
    }
});

cargarLinks();

