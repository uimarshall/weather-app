const api={
    key: "bb2a614797cbd1ce08fb2ad4664e9b9d",
    baseUrl:"api.openweathermap.org/data/2.5/weather"
    // baseUrl:"api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bb2a614797cbd1ce08fb2ad4664e9b9d"
}
const searchField = document.querySelector('.search-box')
searchField.addEventListener('keypress', querySet)

const querySet = (e)=>{
    if (e.keyCode == 13) {
        fetchResults(searchField.value)
        console.log(searchField.value);
        
    }
}

const fetchResults = async(query)=>{
    query.toLowerCase().trim()
    try {
        const response = await fetch(`${api.baseUrl}?q=${query}&units=metric&APPID=${api.key}`)
        const data =await response.json()
        return data
        
    } catch (error) {
        
    }
}

const showResults = (weather)=>{
    console.log(weather);
    let city = document.querySelector('.location')
    city.textContent = `${weather.name}, ${weather.sys.country}`

    let now = new Date()
    let date = document.querySelector('.location .date')
    date.textContent = dateBuilder(now)
    let temp = document.querySelector('.latest .temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>&deg;C</span>`
    let weatherElem = document.querySelector('.latest .weather')
    weatherElem.textContent = weather.weather[0].main


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
fetchResults().then(data=>showResults(data))



let doc;
doc = document;
doc = document.head;
doc = document.body;
doc = document.doctype;
doc = document.domain;
doc = document.documentURI;
doc = document.URL;
// doc = document.contentType;
// doc = document.characterSet;
// doc = document.links;
// doc = document.links[0].classList;
// doc = document.links[0].className;
// doc = document.images;

const para = document.createElement('p');
para.textContent = `My url is ${doc}`;
const paraimg = document.createElement('img');
paraimg.src = "guarantee-200.png"

document.body.appendChild(para);
document.body.appendChild(paraimg);

