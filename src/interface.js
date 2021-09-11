document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').Thermostat = thermostat.energyUsage();
  } 
  const thermostat = new Thermostat();
  updateTemperature();
  // here we set the h1 tag on the html equal to thermostat temp 

// Below is our fetch to collect data from API 
const displayWeather = (city) => {  
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
  
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      document.querySelector('#current-temperature').innerText = data.main.temp;
    })
  }

displayWeather('london');
document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value; // city entered by user dictates the query inside url
    displayWeather(city);
})
  

  
  document.querySelector('#increaseTemp').addEventListener('click', () => { //event listener 
    thermostat.increaseTemp(); // update model 
    updateTemperature(); // updating view
  })

  document.querySelector('#decreaseTemp').addEventListener('click', () => {
    thermostat.decreaseTemp();
    updateTemperature();
  })

  document.querySelector('#reset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.powerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  })

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.powerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  })

});