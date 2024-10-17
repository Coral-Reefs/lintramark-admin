"use client";

import { GoogleMap, LoadScript, Polygon, Marker } from "@react-google-maps/api";
import { useRouter } from "next/navigation";

const MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;

export const defaultMapContainerStyle = {
  width: "100%",
  height: "60vh",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapCenter = {
  lat: 5.44545,
  lng: 100.25715,
};

const zones = {
  zoneA: [
    { lat: 5.4457, lng: 100.2568 },
    { lat: 5.4457, lng: 100.2575 },
    { lat: 5.4452, lng: 100.2575 },
    { lat: 5.4452, lng: 100.2568 },
  ],
};

const peoplePositions = [
  {
    lat: 5.4455,
    lng: 100.257,
    name: "User A1",
    zone: "zoneA",
  },
  {
    lat: 5.4456,
    lng: 100.2572,
    name: "User A2",
    zone: "zoneA",
  },
  {
    lat: 5.4454,
    lng: 100.2569,
    name: "User A3",
    zone: "zoneA",
  },
  {
    lat: 5.4453,
    lng: 100.2571,
    name: "User A4",
    zone: "zoneA",
  },
  {
    lat: 5.4456,
    lng: 100.2568,
    name: "User A5",
    zone: "zoneA",
  },
  {
    lat: 5.4455,
    lng: 100.2573,
    name: "User A6",
    zone: "zoneA",
  },
];

const MapComponent = () => {
  const defaultMapZoom = 19;
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "satellite",
  };
  const router = useRouter();

  return (
    <div className="w-full">
      <LoadScript googleMapsApiKey={MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
        >
          <Polygon
            paths={zones.zoneA}
            options={{
              fillColor: "#FF0000",
              fillOpacity: 0.4,
              strokeColor: "#FF0000",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
            onClick={() => router.push("/zone/A")}
          />
          <Polygon
            paths={zones.zoneB}
            options={{
              fillColor: "#FFFF00",
              fillOpacity: 0.4,
              strokeColor: "#FFFF00",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
            onClick={() => router.push("/zone/B")}
          />
          <Polygon
            paths={zones.zoneC}
            options={{
              fillColor: "#00FF00",
              fillOpacity: 0.4,
              strokeColor: "#00FF00",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
            onClick={() => router.push("/zone/C")}
          />
          <Polygon
            paths={zones.zoneD}
            options={{
              fillColor: "#FF0000",
              fillOpacity: 0.4,
              strokeColor: "#FF0000",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
            onClick={() => router.push("/zone/D")}
          />
          {peoplePositions.map((person, index) => (
            <Marker
              key={index}
              position={{ lat: person.lat, lng: person.lng }}
            ></Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export { MapComponent };
