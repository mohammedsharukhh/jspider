document.getElementById("btn").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  if (!city) {
      alert("Please enter your city name");
      return;
  }

  const apiKey = "0135c0a7a5199009d87f7fcf4cd208b9";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
 
      if (data.cod === 200) {
          const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          document.getElementById("container").innerHTML = `
              <div class="weather-card">
                  <h1>${data.name}, ${data.sys.country}</h1>
                  <img src="${weatherIcon}" alt="Weather Icon" class="weather-icon">
                  <h2>${data.main.temp}°C</h2>
                  <h2>${data.weather[0].description}</h2>
              </div>
          `;
          document.getElementById("container").classList.add("show");
      } else {
          alert("City not found. Please enter a valid city name.");
      }
  } catch (error) {
      console.error(error);
      alert("An error occurred while fetching data.");
  }
});