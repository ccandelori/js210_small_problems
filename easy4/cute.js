const dms = function dms(deg) {
  deg %= 360;

  if (deg < 0) {
    deg = 360 + deg; 
  }

  const degrees = parseInt(deg);
  const minutes = Math.floor((deg - degrees) * 60);
  const seconds = Math.floor((deg - degrees - (minutes / 60)) * 3600);

  return `${degrees}º${minutes}"${seconds}'`;
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));