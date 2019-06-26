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

  it("has a max temp of 25 when power saving mode is on", function() {
    expect(thermostat.powerSavingMode).toBe(true);
    expect(thermostat.maxTemperature).toBe(25);
  });

  it("has a max temp of 32 when power saving mode is off", function() {
    thermostat.powerSavingSwitch();
    expect(thermostat.powerSavingMode).toBe(false);
    expect(thermostat.maxTemperature).toBe(32);
  });

  it("powerSavingMode is on by default", function () {
    expect(thermostat.powerSavingMode).toBe(true);
  });


});
