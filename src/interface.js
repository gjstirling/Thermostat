document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').thermostat = thermostat.energyUsage();
  } 
  const thermostat = new Thermostat();
  updateTemperature();
  // here we set the h1 tag on the html equal to thermostat temp 

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