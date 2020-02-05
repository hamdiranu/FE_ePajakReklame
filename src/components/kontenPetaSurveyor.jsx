import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

class KontenBerandaOfficer extends React.Component {
  render() {
    return (
      <div className="kontenPetaSurveyor">
        <div className="container judulMapsSurveyor">
          <span>Lokasi Reklame</span>
        </div>
        <div
          className="container"
          style={{ backgroundColor: "dimgrey", padding: "30px" }}
        >
          <LeafletMap
            center={[-7.9768, 112.637]}
            zoom={13}
            maxZoom={30}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            className="kotakPeta"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-7.9568618, 112.61864878991119]}>
              <Popup>Malang Town Square</Popup>
            </Marker>

            <Marker position={[-7.966247588776352, 112.60864019393922]}>
              <Popup>
                <Link
                  to="/surveyor/detil-reklame"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ fontSize: "13px", color: "black" }}>
                    Ayo nikmati hunian mewah ini
                  </div>
                  <div style={{ fontSize: "10px" }}>
                    Sepulsa Lodge Malang, Jalan Raya Tidar, Karangbesuki, Malang
                    City, East Java
                  </div>
                </Link>
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
