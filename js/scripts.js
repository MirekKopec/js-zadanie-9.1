// scripts.js

function getTriangleArea(a, h) {

if (a <= 0 || h <= 0) {

  alert('write numbers greater than 0!');

} else {

  return a*h/2;
}

};

var triangleArea = [];

for (var i = 0; i < 3; i++) {

triangleArea[i] = getTriangleArea(10+i,6+i);

}

console.log(triangleArea);
