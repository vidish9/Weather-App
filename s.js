const apikey ="0bc2510faec79d0768331a1a6df00a18";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function check(city)
{

    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    var data= await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +" deg";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

searchBtn.addEventListener("click",()=>{ 
check(searchBox.value);
})