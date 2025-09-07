import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const defaultOrigin: [number, number] = [31.963158, 35.930359]; // Amman, Jordan
const defaultDestination: [number, number] = [32.0853, 34.7818]; // Tel Aviv, Israel

const SingleRideBooking: React.FC = () => {
  const { t } = useTranslation();
  const [origin, setOrigin] = useState<[number, number]>(defaultOrigin);
  const [destination, setDestination] = useState<[number, number]>(defaultDestination);

  // Custom marker icon for better visibility
  const markerIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  return (
    <div className="max-w-2xl mx-auto mt-16 bg-white dark:bg-gray-800 rounded shadow p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('nav.book')}</h2>
      <form>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Select Origin & Destination</label>
          <MapContainer
            center={origin}
            zoom={8}
            scrollWheelZoom={true}
            className="h-64 w-full rounded shadow"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker
              position={origin}
              icon={markerIcon}
              draggable={true}
              eventHandlers={{
                dragend: (e) => {
                  const latlng = e.target.getLatLng();
                  setOrigin([latlng.lat, latlng.lng]);
                },
              }}
            >
              <Popup>Origin</Popup>
            </Marker>
            <Marker
              position={destination}
              icon={markerIcon}
              draggable={true}
              eventHandlers={{
                dragend: (e) => {
                  const latlng = e.target.getLatLng();
                  setDestination([latlng.lat, latlng.lng]);
                },
              }}
            >
              <Popup>Destination</Popup>
            </Marker>
          </MapContainer>
        </div>
        {/* TODO: Add date/time picker, passenger count, vehicle type, price calculation */}
        <Button variant="primary" type="submit" className="w-full">{t('buttons.bookNow')}</Button>
      </form>
    </div>
  );
};

export default SingleRideBooking;
