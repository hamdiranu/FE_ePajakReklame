import React from "react";
import { withRouter, Link } from "react-router-dom";
import markerHijau from "../images/green-pin.png";
import markerBiru from "../images/blue-pin.png";
import markerMerah from "../images/red-pin.png";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Kelas untuk Komponen Halaman Peta Surveyor
class KontenPetaSurveyor extends React.Component {
  componentDidMount = () => {
    store.setState({ statusPageHomeSurveyor: false });
    store.setState({ statusSuksesScan: false, statusGagalScan: false });
    this.props.getListLokasiReklame();
  };

  render() {
    let iconSudahValid = L.icon({
      iconRetinaUrl: require("../images/green-pin.png"),
      iconUrl: require("../images/green-pin.png"),
      iconSize: [45, 45], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 45], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [0, -43] // point from which the popup should open relative to the iconAnchor
    });
    let iconMenujuValid = L.icon({
      iconRetinaUrl: require("../images/blue-pin.png"),
      iconUrl: require("../images/blue-pin.png"),
      iconSize: [45, 45], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 45], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [0, -43] // point from which the popup should open relative to the iconAnchor
    });
    let iconBelumValid = L.icon({
      iconRetinaUrl: require("../images/red-pin.png"),
      iconUrl: require("../images/red-pin.png"),
      iconSize: [45, 45], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 45], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [0, -43] // point from which the popup should open relative to the iconAnchor
    });
    return (
      <div className="kontenPetaSurveyor">
        <div className="container kotakKontenPetaSurveyor">
          <div className="rowJudulLokasi">
            <div className="container judulMapsHomeSurveyor">
              <span>Lokasi Reklame</span>
            </div>
          </div>
          <LeafletMap
            center={[-7.9768, 112.637]}
            zoom={13.5}
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

            {this.props.listLokasiReklame.map((reklame, i) => {
              var iconPointer;
              if (reklame.status_scan === "Sudah Valid") {
                iconPointer = iconSudahValid;
              } else if (reklame.status_scan === "Menuju Valid") {
                iconPointer = iconMenujuValid;
              } else if (reklame.status_scan === "Belum Valid") {
                iconPointer = iconBelumValid;
              }
              return (
                <Marker
                  icon={iconPointer}
                  position={[
                    reklame["objek_pajak"].latitude,
                    reklame["objek_pajak"].longitude
                  ]}
                >
                  <Popup>
                    <div style={{ fontSize: "10px", color: "grey" }}>
                      {reklame["objek_pajak"].jenis_reklame}
                    </div>
                    <div style={{ fontSize: "13px", color: "black" }}>
                      {reklame["objek_pajak"].judul_reklame}
                    </div>
                    <Link
                      to={`/surveyor/detil-reklame/${reklame["bukti_pembayaran"].id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div style={{ fontSize: "10px" }}>
                        {reklame["objek_pajak"].lokasi}
                      </div>
                    </Link>
                    <div style={{ fontSize: "9px" }}>
                      Jumlah Tervalidasi : {reklame.kodeQR_terscan} /{" "}
                      {reklame["bukti_pembayaran"].jumlah_reklame}
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </LeafletMap>
        </div>
        <div className="container legend">
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-md-4 col-sm-12">
              <div className="container-fluid">
                <div className="row pembatasMarker">
                  <div className="col-md-3 col-sm-2 legendBagianMarker">
                    <img className="markerLegend" src={markerHijau} alt="" />
                  </div>
                  <div className="col-md-9 col-sm-10 kalimatLegend">
                    <span>Seluruh QR Telah Tervalidasi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="container-fluid">
                <div className="row pembatasMarker">
                  <div className="col-md-3 col-sm-2 legendBagianMarker">
                    <img className="markerLegend" src={markerBiru} alt="" />
                  </div>
                  <div className="col-md-9 col-sm-10 kalimatLegend">
                    <span>Sebagian QR Telah Tervalidasi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="container-fluid">
                <div className="row pembatasMarker">
                  <div className="col-md-3 col-sm-2 legendBagianMarker">
                    <img className="markerLegend" src={markerMerah} alt="" />
                  </div>
                  <div className="col-md-9 col-sm-10 kalimatLegend">
                    <span>Seluruh QR Belum Tervalidasi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "listLokasiReklame",
  actions
)(withRouter(KontenPetaSurveyor));
