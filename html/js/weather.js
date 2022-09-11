const API_KEY = "a4b4f5d7fa55ad55a7f8c464abf96d7d";

function onGeoOK(position){
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
fetch(url)
.then((Response) => Response.json())
.then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
 city.innerText = data.name;
 weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
});
}
function onGeoError(){
 alert("당신의 위치 정보를 알 수 없습니다!");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);