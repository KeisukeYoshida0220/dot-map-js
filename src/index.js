import DottedMap from "dotted-map";

// Create the map
const map = new DottedMap({
  width: 100,
  grid: "diagonal"
});

map.addPin({
  lat: -0.023559,
  lng: -73.935242,
  svgOptions: { color: "#ff0000", radius: 0.4 }
});

map.addPin({
  lat: 48.03891,
  lng: -106.14502,
  svgOptions: { color: "#ff0000", radius: 0.4 }
});

map.addPin({
  lat: 7.946527,
  lng: -1.023194,
  svgOptions: { color: "#ff0000", radius: 0.4 }
});

// // If you want to get the raw array of points
map.getPoints();
// // [{ x, y, data, svgOptions }]

// // Or use this method to get a string which is a SVG
// map.getSVG({
//   shape: "circle" | "hexagon", // if you use hexagon, prefer the grid `diagonal`
//   backgroundColor, // background color of the map
//   color, // default color of the points
//   radius: 0.5 // default radius of the points
// });

console.log(map);

const svgMap = map.getSVG({
  radius: 0.22,
  color: "#423B38",
  shape: "circle"
});

document.getElementById("app").innerHTML = svgMap;
