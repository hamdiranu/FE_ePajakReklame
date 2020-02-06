import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

class KontenBerandaOfficer extends React.Component {
  componentDidMount = () => {
    store.setState({ statusPageHomeSurveyor: false });
    this.props.getListLokasiReklame();
  };
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

            {this.props.listLokasiReklame.map((reklame, i) => (
              <Marker
                position={[
                  reklame["objek_pajak"].latitude,
                  reklame["objek_pajak"].longitude
                ]}
              >
                <Popup>
                  <Link
                    to={`/surveyor/detil-reklame/${reklame["bukti_pembayaran"].id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ fontSize: "10px", color: "grey" }}>
                      {reklame["objek_pajak"].jenis_reklame}
                    </div>
                    <div style={{ fontSize: "13px", color: "black" }}>
                      {reklame["objek_pajak"].judul_reklame}
                    </div>
                    <div style={{ fontSize: "10px" }}>
                      {reklame["objek_pajak"].lokasi}
                    </div>
                  </Link>
                </Popup>
              </Marker>
            ))}
          </LeafletMap>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

export default connect(
  "listLokasiReklame",
  actions
)(withRouter(KontenBerandaOfficer));
