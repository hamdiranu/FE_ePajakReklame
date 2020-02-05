import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { Button, FormControl } from "react-bootstrap";

class KontenBerandaOfficer extends React.Component {
  render() {
    return (
      <div className="kontenPetaSurveyor">
        <div className="container judulDetilReklameSurveyor">
          <span className="judulReklameSurveyor">Iklan Perumahan</span>
          <span className="nomorSspdDetilReklame">No SSPD 1234567</span>
        </div>
        <div
          className="container"
          style={{ backgroundColor: "dimgrey", padding: "30px" }}
        >
          <div className="row">
            <div className="col-md-6">
              <LeafletMap
                center={[-7.966247588776352, 112.60864019393922]}
                zoom={18}
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
                <Marker position={[-7.966247588776352, 112.60864019393922]}>
                  <Popup>
                    Sepulsa Lodge Malang, Jalan Raya Tidar, Karangbesuki, Malang
                    City, East Java
                  </Popup>
                </Marker>
              </LeafletMap>
            </div>
            <div className="col-md-6">
              <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
                <div className="kotakInfoDetilReklame">
                  <div className="rowInfoDetilReklame">
                    <span>Judul : </span>
                    <span>Ayo nikmati hunian mewah ini</span>
                  </div>
                  <div className="rowInfoDetilReklame">
                    <span>Jenis Reklame : </span>
                    <span>Spanduk</span>
                  </div>
                  <div className="rowInfoDetilReklame">
                    <span>Jumlah Reklame : </span>
                    <span>3</span>
                  </div>
                  <div className="rowInfoDetilReklame">
                    <span>Jumlah Kode QR Valid : </span>
                    <span>1 / 3</span>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      paddingTop: "10px",
                      paddingBottom: "10px"
                    }}
                  >
                    <Button variant="primary">Scan Kode QR</Button>
                  </div>
                  <div className="catatanPelanggaran">
                    <span>Catatan Pelanggaran :</span>
                  </div>
                  <div className="textAreaPelanggaran">
                    <FormControl
                      className="isiTextAreaPelanggaran"
                      as="textarea"
                      aria-label="With textarea"
                    />
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      paddingTop: "20px",
                      paddingBottom: "20px"
                    }}
                  >
                    <Button variant="danger">Report</Button>
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

export default connect("", actions)(withRouter(KontenBerandaOfficer));
