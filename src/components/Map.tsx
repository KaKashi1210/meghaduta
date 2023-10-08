import  { useState, MouseEvent } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// Define the default map coordinates for Chamoli district
import L from 'leaflet'

const defaultPosition: [number, number] = [30.6823, 79.4935]; // Chamoli, India

// Create an icon for the red marker
// Replace the custom icon with the default Leaflet marker icon
const redMarkerIcon = new L.Icon.Default();
export default () => {
  const [markerPosition, setMarkerPosition] = useState(defaultPosition);

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    setMarkerPosition([e.latlng.lat, e.latlng.lng]);
  };

  const handleDivClick = (e: MouseEvent<HTMLDivElement>) => {
    // Check if the event target is an instance of HTMLDivElement
    if (e.target instanceof HTMLDivElement) {
      const leafletMouseEvent = e as unknown as L.LeafletMouseEvent;
      handleMapClick(leafletMouseEvent);
    }
  };
  return (
    <>
      <div style={{ width: '90%', margin: '10px auto', padding: '10px' }}>
        <MapContainer
          center={defaultPosition}
          zoom={8}
          style={{ height: '800px', width: '100%', borderRadius: '15px', border: '2px solid #000' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Circle to represent the cloudburst detection area */}
          <Circle
            center={defaultPosition}
            pathOptions={{ color: 'red', fillColor: 'red' }}
            radius={5000} // Adjust the radius as needed
          >
            <Popup position={[defaultPosition[0] + 0.9, defaultPosition[1]]}>Cloudburst Detection Area in Chamoli</Popup>
          </Circle>

          {/* Red marker for the specified location */}
          <Marker position={markerPosition} icon={redMarkerIcon}>
            <Popup position={[markerPosition[0], markerPosition[1] + 0.02]}>
              <div className='text-xl'>
                75% Chances of Cloudburst in Chamoli
              </div>
            </Popup>
          </Marker>

          {/* Handle map click by clicking on a hidden div */}
          <div onClick={handleDivClick} style={{ display: 'none' }}></div>

          <div style={{ position: 'absolute', top: '10px', left: '40px', zIndex: 900 }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                padding: '8px',
                border: '1px solid #000',
                borderRadius: '15px',
                fontSize: '14px',
                outline: 'none',
              }}
            />
          </div>
        </MapContainer>
      </div>
    </>
  )
}
