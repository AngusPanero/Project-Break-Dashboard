const apiKey = "e73959ebf8294655bca200059240612" 
const city = "london"
const ciudad = document.getElementById("ciudad")
const climaDelDia = document.getElementById("climaDelDia")

const climaFetch = async () => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
    try{
        const response = await fetch (url)
        if(!response.ok){
            throw new Error ("Error en la solicitud", response.status)
        }

        const data = await response.json();
        console.log(data);

        ciudad.innerHTML = `
        <p>${data.location.name}, ${data.location.country}</p>
        <img src="${data.current.condition.icon}">
        <p>${data.current.temp_c}ºC</p>
        <p>Viento: ${data.current.gust_kph} Km/h</p>
        `

        climaDelDia.innerHTML = "";
        
        data.forEach(day => {
            climaDelDia.innerHTML += `
                <div>
                    <p>${data.forecast.forecastday[0].hour}°C</p>
                </div>
            `;
        })

        return data;

    }catch (error){
            console.log("Se ha producido un error", error);
        }
    }

climaFetch();