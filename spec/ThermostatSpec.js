describe ("Thermostat has 20 on initialize", function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Has a default value of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

})