class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.maxTemp = 25;
    this.usage = "medium-usage";

  }

  increaseTemp() {
    if (this.temperature < this.maxTemp) {
      this.temperature++;
      this.energyUsage();
    }
  }

  decreaseTemp() {
    if (this.temperature > 10) {
      this.temperature--;
      this.energyUsage();
    }
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
    this.maxTemp = 32;
  }

  powerSavingModeOn() {
    this.powerSavingMode = true;
    this.maxTemp = 25;
  }



  resetTemperature() {
    this.temperature = 20;
  }

  energyUsage() {
    if (this.temperature < 18){
      this.usage = "low-usage";
    }
    else if (this.temperature <= 25) {
      this.usage = "medium-usage";
    }
    else {
      this.usage = "high-usage";
    }
  }



}
