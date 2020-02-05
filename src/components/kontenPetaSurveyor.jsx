import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

class KontenBerandaOfficer extends React.Component {
  render() {
    return (
      <div className="kontenPetaSurveyor">
        <div className="container">
          <LeafletMap
            center={[-7.9768, 112.637]}
            zoom={12}
            maxZoom={30}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-7.9568618, 112.61864878991119]}>
              <Popup>Malang Town Square</Popup>
            </Marker>
            1
            <Marker position={[-7.966247588776352, 112.60864019393922]}>
              <Popup>
                Sepulsa Lodge Malang, Jalan Raya Tidar, Karangbesuki, Malang
                City, East Java
              </Popup>
            </Marker>
          </LeafletMap>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

export default connect("", actions)(withRouter(KontenBerandaOfficer));
