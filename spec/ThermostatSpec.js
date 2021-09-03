describe ("Thermostat", function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Has a default value of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

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



})