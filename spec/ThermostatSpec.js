describe ("Thermostat", function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Has a default value of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("Powersaving mode is on by default", function() {
    expect(thermostat.powerSavingMode).toBe(true);
  })

  describe ("increaseTemp", function() {

    it("Can increase temperature", function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21);
    });

    it("When power saving mode is on max temp is 25", function() {
      for( let i = 0; i < 6; i++) { 
        thermostat.increaseTemp();
      }
      expect(thermostat.temperature).toEqual(25);
    })

    it("When power saving mode is on max temp is 25", function() {
      thermostat.switchOff();
      for( let i = 0; i < 13; i++) { 
        thermostat.increaseTemp();
      }
      expect(thermostat.temperature).toEqual(32);
    })

  })

  describe ("decreaseTemp", function() {

    it("Can decrease temperature", function() {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(19);
    });

    it("Has minimum temperature required of 10", function() {
      for( let i = 0; i < 11; i++) { 
        thermostat.decreaseTemp();
      }
      expect(thermostat.temperature).toEqual(10);
    })

  })

  describe ("switch off", function() {

    it("Can switch off power saving mode", function() {
      thermostat.switchOff();
      expect(thermostat.powerSavingMode).toBe(false);
    });


  })

  describe ("reset", function() {

    it("Can reset to default temp", function() {
      for( let i = 0; i < 11; i++) { 
        thermostat.decreaseTemp();
      }
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });


  })

  describe ("setUsage", function() {

    it("displays low usage when temp < 18", function() {
      for( let i = 0; i < 3; i++) { 
        thermostat.decreaseTemp();
      }
      expect(thermostat.usage).toEqual("low-usage");
    });

    it("displays med usage when temp <= 25", function() {
      expect(thermostat.usage).toEqual("medium-usage");
    });

    it("Set high usage when > 25", function() {
      thermostat.switchOff();
      for( let i = 0; i < 6; i++) { 
        thermostat.increaseTemp();
      }
      expect(thermostat.usage).toEqual("high-usage");
    })


  })
})