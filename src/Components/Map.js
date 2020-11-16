import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

export const Map = (props) => {
  const [index, setIndex] = useState(0);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieXVuY2hyaXMiLCJhIjoiY2toaWczZng3MDV2czJ3cGY0bjdwNGM0MCJ9.cdnzCe2V3T4StYCpGX79ZA";

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-115.606391900599817, 32.673693943392962],
        zoom: 13,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });    
  }, [map]);

  useEffect(() => {
    setTimeout(() => {
      props.data && console.log(props.data[index]);
      // console.log(currData)
      
    }, 4000)
    // setTimeout(() => {
      
    //     for (let i = 0; i < props.data.length; i++) {
    //       let marker = new mapboxgl.Marker()
    //         .setLngLat(props.data[i].geometry.coordinates)
    //         .addTo(map);
    //     }
    // }, 2000)
    
  }, [index])

  return (
    <div className="content-container">
      <div
        ref={(el) => (mapContainer.current = el)}
        className="map-container"
      ></div>
    </div>
  );
}