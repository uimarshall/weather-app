require('dotenv').config()
import {showSpinner, hideSpinner} from './componentService';
const weatherInfo = {
    
}
weatherInfo.temperature = {
    unit: "celcius"
}



const api={
    // key: "bb2a614797cbd1ce08fb2ad4664e9b9d",
    key: process.env.API,
    baseUrl:"http://api.openweathermap.org/data/2.5/weather",
    weatherIconUrl:"http://openweathermap.org/img/wn/"
}






let notification = document.querySelector('.location .notification')


const fetchResults = (query)=>{
    showSpinner()
       
        fetch(`${api.baseUrl}?q=${query}&APPID=${api.key}&units=metric`).then(result=>{
            hideSpinner()
            return result.json()
        }).then(res=>{
            init(res)
        }).catch(() => {
            
    notification.textContent = "Please search for a valid city";
  });
  notification.textContent = ""       
  
}


const init =async (queryResult)=>{
    if (queryResult.cod == "404") {

        notification.textContent = `${queryResult.message}, Please search for a valid city!`
        notification.style.marginBottom = "10px" 
       
    }else{
        console.log(queryResult);
         switch (queryResult.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("src/assets/clear_bg.jpg")'
            
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("src/assets/stormy_bg.jpg")'
            
            break;
        case 'Rain':
        case 'Drizzle':
            document.body.style.backgroundImage = 'url("src/assets/rainy_bg.jpg")'
            
            break;
        case 'Fog':
            document.body.style.backgroundImage = 'url("src/assets/foggy_bg.jpg")'
            
            break;
        case 'Snow':
            document.body.style.backgroundImage = 'url("src/assets/snow_bg.jpg")'
            
            break;
        case 'Clouds':
            document.body.style.backgroundImage = 'url("src/assets/cloudy_bg.jpg")'
            
            break;
       
    
        default:
            break;
    }
   
     let weatherIcon = await document.getElementById('weather-icon')
     console.log(weatherIcon);
     weatherIcon.src = await `${api.weatherIconUrl}${queryResult.weather[0].icon}@2x.png`
    showWeatherResults(queryResult)
    }

    
   

}






const showWeatherResults = (weather)=>{
    console.log(weather);
    let city = document.querySelector('.location .city')
    city.textContent = `${weather.name}, ${weather.sys.country}`
    

    let now = new Date()
    console.log(now);
    let dateNow = document.getElementById('date')
    console.log(dateNow);
    dateNow.textContent = dateBuilder(now)
    let temp = document.querySelector('.latest .temp-value')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>&deg;C</span>`
    temp.addEventListener("click", ()=>{
        if (weather.main.temp === undefined) return 
            
        if (weatherInfo.temperature.unit == "celcius") {
            let fahrenheit = celciusToFahrenheit(weather.main.temp)
            fahrenheit = Math.floor(fahrenheit)
            temp.innerHTML = `${fahrenheit}&deg;<span>F</span>`
            weatherInfo.temperature.unit = "fahrenheit"
            
        }else{
            temp.innerHTML = `${Math.round(weather.main.temp)}&deg;<span>C</span>`
            weatherInfo.temperature.unit = "celcius"
        }
    })
    let weatherElem = document.querySelector('.latest .weather')
    weatherElem.textContent = `${weather.weather[0].main} - ${weather.weather[0].description}`


}

const celciusToFahrenheit=(temp)=>{
    return (temp * 9/5) + 32

}

/**getDay() is an integer corresponding to the day of the week: 
 * 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.
 * let day = new Date().getDay() = 2 for Tuesday;*/
const dateBuilder =(dateObj)=>{
    let months = Array.from({length: 12}, (e, i) => {
   return new Date(null, i + 1, null).toLocaleDateString("en", {month: "long"});
   
})
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[dateObj.getDay()]
let date = dateObj.getDate()
let month = months[dateObj.getMonth()]
let year = dateObj.getFullYear()
return `${day} ${date} ${month} ${year}`
}

const searchField = document.querySelector('.search-box')
const searchBtn = document.querySelector('#search-btn')
searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    let searchValue = searchField.value
    searchValue.trim()
    if (searchValue) {
        
        fetchResults(searchValue)
         searchField.value =""
        
    }
    


})








