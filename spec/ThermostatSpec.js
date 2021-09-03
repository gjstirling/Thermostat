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

  })



})