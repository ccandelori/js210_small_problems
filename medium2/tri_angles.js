const triangle = function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3].sort((a, b) => a - b);

  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return 'invalid';
  }
}

function isValid(angles) {
  let sum = angles.reduce((total, angle) => { return total + angle });
  return sum === 180 && angles[0] > 0;
}

function getTriangleType(angles) {
  if (angles[2] == 90) return 'right';
  if (angles[0] < 90 && angles[2] < 90) return 'acute';
  if (angles[2] > 90) return 'obtuse';
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));