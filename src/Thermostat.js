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
      this.setUsage();
    }
  }

  decreaseTemp() {
    if (this.temperature > 10) {
      this.temperature--;
      this.setUsage();
    }
  }

  switchOff() {
    this.powerSavingMode = false;
    this.maxTemp = 32;
  }

  reset() {
    this.temperature = 20;
  }

  setUsage() {
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
