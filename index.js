function oldEnough(age) {
  if (age > 17) {
    return document.getElementById('result').innerHTML = 'old enough';
  }else{
    document.getElementById('result').innerHTML = 'not old enough';
  };
};
function underAge(age) {
  if (age < 17) {
    return document.getElementById('result').innerHTML = 'under age';
  }else{
    document.getElementById('result').innerHTML = 'not under age';
  };
};
function legalSpeed(speed) {
  if (speed <= 50) {
    return document.getElementById('result').innerHTML = 'legal speed';
  };
};
function isGoldenYears(age) {
  if (age >= 65) {
    return document.getElementById('result').innerHTML = 'golden years';
  };
};
