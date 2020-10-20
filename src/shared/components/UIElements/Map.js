import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGR1YWxiYSIsImEiOiJja2djbjVwbmQwMWExMnBud281c2tqdjBnIn0.C4mzZnwdhv9ALSfeBTBbyw";

// const styles = {
//   width: "100vw",
//   height: "calc(100vh - 80px)",
//   position: "absolute",
// };

const Map = (props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const { center, zoom } = props;

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: center,
        zoom: zoom,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, center, zoom]);

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      className={`map ${props.className}`}
      style={props.style}
    />
  );
};

export default Map;
