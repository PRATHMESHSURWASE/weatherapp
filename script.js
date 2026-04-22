const apikey = "87126917394d42aca62161955253110";
const searchbar = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather_icon");

async function checkweather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_c + " °C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

    // 🌤️ Update weather icon
    const condition = data.current.condition.text.toLowerCase();

    if (condition.includes("cloud")) {
      WeatherIcon.src = "./images/clouds.png";
    } else if (condition.includes("clear") || condition.includes("sunny")) {
      WeatherIcon.src = "./images/clear.png";
    } else if (condition.includes("rain")) {
      WeatherIcon.src = "./images/rain.png";
    } else if (condition.includes("snow")) {
      WeatherIcon.src = "./images/snow.png";
    } else if (condition.includes("mist") || condition.includes("fog")) {
      WeatherIcon.src = "./images/mist.png";
    } else if (condition.includes("thunder")) {
      WeatherIcon.src = "./images/storm.png";
    } else {
      // fallback icon
      WeatherIcon.src = data.current.condition.icon;
    }
  } catch (error) {
    document.querySelector(".city").innerHTML = "City not found ❌";
    document.querySelector(".temp").innerHTML = "";
    document.querySelector(".humidity").innerHTML = "";
    document.querySelector(".wind").innerHTML = "";
    WeatherIcon.src = "";
    console.error(error);
  }
}

searchbtn.addEventListener("click", () => {
  const city = searchbar.value.trim();
  if (city !== "") {
    checkweather(city);
  }
});
