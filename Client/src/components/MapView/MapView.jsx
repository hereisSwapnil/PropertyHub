import SidePanel from "../Home/Sidepanel";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polygon,
} from "react-leaflet";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";

const DisplayCard = () => {
  const coord = [28.7321246, 77.1185386];
  const polygonCoords = [
    [28.73223, 77.118855], // First vertex
    [28.732258, 77.118947], // Second vertex
    [28.732331, 77.119023],
    [28.732468, 77.119155],
    [28.732673, 77.11929],
    [28.732828, 77.119474],
    [28.733182, 77.119073],
    [28.733392, 77.118779],
    [28.733162, 77.118554],
    [28.732896, 77.118343],
    [28.732652, 77.11826], // Third vertex
  ];

  return (
    <>
      <Navbar />
      <div className="flex">
        <SidePanel />
        <div className="m-auto h-fit w-fit m-0">
          <MapContainer
            center={coord}
            zoom={50}
            style={{
              height: "950px",
              width: "1650px",
              textAlign: "center",
              borderRadius: "16px",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coord}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <Polygon
              pathOptions={{ color: "blue" }}
              positions={polygonCoords}
            />
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default DisplayCard;