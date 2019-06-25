describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });


  it("has a default temperature of 20", function() {
    expect(thermostat.temperature).toBe(20);
  });

  it(".up increase thermostat by 1", function() {
    expect(thermostat.up()).toBe(21);
  });

  it(".down decrease thermostat by 1", function() {
    expect(thermostat.down()).toBe(19);
  });

  it("has a default minimum temperature", function() {
    expect(thermostat.minimumTemp).toBe(10);
  });
});
