describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("has a default temperature of 20", function() {
    expect(thermostat.getCurrentTemp()).toBe(20);
  });

  it(".up increase thermostat by 1", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toBe(21);
  });

  it(".down decreases thermostat by 1", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toBe(19);
  });

  it("has a default minimum temperature", function() {
    for (var i = 0; i < 11; i++) {
    thermostat.down();
  }
  expect(thermostat.getCurrentTemp()).toEqual(10);
  });

  it("powerSavingMode is on by default", function () {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can be reset to the default temperature', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });
  });

  describe('displaying usage levels', function() {
  describe('when the temperature is below 18 degrees', function() {
    it('it is considered low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

  describe('when the temperature is between 18 and 25 degrees', function() {
    it('it is considered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
  });

  describe('when the temperature is anything else', function() {
    it('it is considered high-usage', function() {
      thermostat.powerSavingMode = false;
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });

});
