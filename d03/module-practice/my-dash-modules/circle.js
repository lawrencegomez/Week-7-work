var diameter = require ('./diameter.js')

function area(r) {
  return (Math.PI * (r * r));
}

function circumference(r) {
  return (2 * Math.PI * r);
}

// this object will be exported to be used by other files in the folder
module.exports = {
  area: area,
  circumference: circumference,
  diameter: diameter
}
