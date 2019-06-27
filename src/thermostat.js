function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMP = 10;
  this.maxTemperature = 25;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.getCurrentTemp = function() {
  return this.temperature;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMP;
}

Thermostat.prototype.up = function() {
if (this.isMaxTemp()) {
  return;
}
  this.temperature ++;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature --;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
}
