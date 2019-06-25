function Thermostat() {
  this.temperature = 20;
  this.minimumTemp = 10;
}

Thermostat.prototype.up = function() {
  this.temperature ++;
  return this.temperature;
}

Thermostat.prototype.down = function() {
  this.temperature --;
  return this.temperature;
}
