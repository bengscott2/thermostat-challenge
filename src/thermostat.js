function Thermostat() {
  this.temperature = 20;
  this.minimumTemp = 10;
  this.maxTemperature = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function() {
  this.temperature ++;
  return this.temperature;
}

Thermostat.prototype.down = function() {
  this.temperature --;
  return this.temperature;
}

Thermostat.prototype.powerSavingSwitch = function() {
  if (this.powerSavingMode) {
    this.powerSavingMode = false;
    this.maxTemperature = 32;
  } else {
    this.powerSavingMode = true;
    this.maxTemperature = 25;
  }
}
