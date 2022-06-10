import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './App.css';

export default function App() {
  return (  
    <MapContainer className="simpleMap" center={[45.4, -75.7]} zoom={16} scrollWheelZoom={true}>      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"        
      />
    </MapContainer>    
  );
}

