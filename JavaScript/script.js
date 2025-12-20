const apiKey = 'a42eba58c6cc265daac3b47035c69a5a';

async function getWeather(city){
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    let data = await raw.json();
    console.log(data)
}

getWeather('Bhopal');