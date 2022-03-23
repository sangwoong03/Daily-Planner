const API_KEY = "df91fcabb4316a128d6c4a8e9bce3877";

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      const climate = data.weather[0].main;
      const site = data.name
      const temperature = data.main.temp.toFixed(1);
      
      const weatherBox = document.querySelector(".weather-box");
      weatherBox.innerHTML = 
          `<p class="weahter--climate"> ${climate} </p>
          <p class="weahter--place"> ${site} </p>
          <p class="weahter--temperature"> ${temperature}도 </p>`
    });
};

function geoFailure() {
  console.log("error!!");
};


navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure);