const weatherContainer = document.querySelector(".js-weather");
const API_KEY ="8fa25ea135567488ff17a6489d89d1ec";
const COORDS = 'coords';

function getWeather(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json()
  }
  ).then(function(json){
    // console.log(json);
    const temp = json.main.temp;
    const place = json.name;
    weatherContainer.innerText = `Temperature at ${place} : ${temp}°C`;
  });
}

function saveGeo(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));
  getWeather(coordsObj.latitude,coordsObj.longitude);
}

function handleGeoError(){
  console.log("can't access geo location");
  
  const latitude = 37.48847912295632;
  const longitude = 126.75374737031751;
  const coordsObj={latitude,longitude}
  saveGeo(coordsObj);
}

function handleGeoSuccess(position){
  console.log("Access to geo location successful");

  const latitude = position.latitude;
  const longitude = position.longitude;
  const coordsObj={latitude,longitude}
  saveGeo(coordsObj);

}

function askCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError,{timeout:5000});  
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askCoords();
  }
  else{
    const parsed = JSON.parse(loadedCoords);
    getWeather(parsed['latitude'],parsed['longitude'])
  }
}

(function init(){
  loadCoords();
})();
