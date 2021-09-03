class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  increaseTemp() {
    if (this.temperature < 25) {
      this.temperature++;
    }
  }

  decreaseTemp() {
    if (this.temperature > 10) {
      this.temperature--;
    }
  }

}
