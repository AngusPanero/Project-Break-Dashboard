const apiKey = "e73959ebf8294655bca200059240612"
const city = "london"

const clima = async () => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
    try{
        const response = await fetch (url)
        if(!response.ok){
            console.log("Error en la solicitud", response.status)
        }
        const data = await response.json()
        console.log("Data de la Ciudad", data)
        return data
        
    }catch{
        if(error){
            console.log("Se ha producido un error", error)
        }
    }
}