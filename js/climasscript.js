const apiKey = "e73959ebf8294655bca200059240612" 
const city = "london"
const ciudad = document.getElementById("ciudad")
const climaDelDia = document.getElementById("climaDelDia")
const pais = document.getElementById("ciudadPais")

const climaFetch = async () => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
    try{
        const response = await fetch (url)
        if(!response.ok){
            throw new Error ("Error en la solicitud", response.status)
        }
    
        const data = await response.json();
        console.log(data);

        pais.innerHTML = `
            <p>${data.location.name}, ${data.location.country}</p>
        ` 

        ciudad.innerHTML = `
            <img src="${data.current.condition.icon}">
            <p>${data.current.temp_c}ºC</p>
            <p>Viento: ${data.current.gust_kph} Km/h</p>
            <p>Humedad: ${data.current.humidity}%</p>
            <p>Precipitaciones: ${data.current.precip_in}%</p>
        `

        climaDelDia.innerHTML = "";
        
        data.forecast.forecastday.forEach(day => { // con el metodo .split("")[1] separo la linea en partes que esten separadas por un espacio dentro de los corchetes va el indice tengo que dejar espacio en las ""
            day.hour.forEach(hour => {
                climaDelDia.innerHTML += `
            <div>
                <p>${hour.time.split(" ")[1]}</p>
                <p>${hour.temp_c}°C</p>
                <img src="${hour.condition.icon}" alt="Icono de clima">
            </div>
        `;
        });
    })
        return data;

    }catch (error){
            console.log("Se ha producido un error", error);
        }
    }

climaFetch();