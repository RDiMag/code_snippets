const ftoc = function(num) {
    numCelsius = (num - 32) * 5 / 9;
    return Math.round(numCelsius * 10) / 10;
  };
  
  const ctof = function(num) {
    numF = (num * 9 / 5) + 32;
    return Math.round(numF * 10) / 10;
  };