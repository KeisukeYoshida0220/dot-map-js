import DottedMap, { Point } from "dotted-map";
import { useMemo, useState } from "react";
import "./styles.css";

const map = new DottedMap({ height: 60, grid: "vertical" });

map.addPin({
  lat: 40.73061,
  lng: -73.935242,
  data: "Point 1"
});
map.addPin({
  lat: 35.64934936471967,
  lng: 140.04189150342972,
});
map.addPin({
  lat: 48.8534,
  lng: 2.3488
});

const points = map.getPoints();
const pins = points.filter((point) => point.data);

// const pinsMap = pins.reduce((acc, point) => ({
//   ...acc,
//   [point.data]: point
// }),{} as Record<string, Point>);

const svgOptions = {
  backgroundColor: "#000",
  color: "yellow",
  radius: 0.2
};

const svgMap = map.getSVG({
  ...svgOptions,
  shape: "circle"
});

const size = {
  x: 25,
  y: 25
};

const offset = {
  x: -5,
  y: 2
};

export default function App() {
  const [pin, setActivePin] = useState(pins[0]);
  const viewBox = `${pin.x - size.x / 2 + offset.x} ${pin.y - size.y / 2 + offset.y
    } ${size.x} ${size.y}`;
  return (
    <div className="App">
      {pins.map((pin) => (
        <button type="button" onClick={() => setActivePin(pin)}>
          {pin.data}
        </button>
      ))}

      <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
        {points.map((point) => (
          <a href={pin.data === point.data ? "#2" : "#"}>
            <circle
              cx={point.x}
              cy={point.y}
              r={svgOptions.radius}
              fill={svgOptions.color}
              style={{ opacity: pin.data === point.data ? 1 : 0.4, cursor: pin.data === point.data ? "pointer" : "alias" }}
            />
          </a>
        ))}
      </svg>
    </div>
  );
}
