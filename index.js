const CalculatePrototype = function (value) {
  this.value = value;
  return this;
}

CalculatePrototype.prototype.valueOf = function() {
  return this.value;
}

CalculatePrototype.prototype.plus = function (value) {
  this.value += value;
  return this;
}

CalculatePrototype.prototype.minus = function (value) {
  this.value -= value;
  return this;
}

CalculatePrototype.prototype.multiplyBy = function (value) {
  this.value *= value;
  return this;
}

CalculatePrototype.prototype.dividedBy = function (value) {
  this.value /= value;
  return this;
}

CalculatePrototype.prototype.result = function (value) {
  return this.value;
}

// console.log('====================================');
// console.log('Implementação usando object mode');
// console.log('====================================');

const CalculateObject = {
  value: 10,
  plus: function(value) {
    this.value += value;
    return this;
  },
  minus: function(value) {
    this.value -= value;
    return this;
  },
  multiplyBy: function(value) {
    this.value *= value;
    return this;
  },
  dividedBy: function(value) {
    this.value /= value;
    return this;
  },
  result: function() {
    return this.value;
  },
  valueOf() {
    return this.value;
  }
}

// console.log(calculate.multiplyBy(2).plus(1).dividedBy(3).minus(1) == 6)

module.exports = {
  CalculateObject,
  CalculatePrototype
}