import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import mapsLogo from "../images/mapsLogo.png";
import mapboxgl from "mapbox-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtZGlyYW51IiwiYSI6ImNrNjkxdjF4aTBiOGczbGxqOWdocnhrN3kifQ.4x6Q9f7hcT-xSqZv4plNxA";

// Kelas untuk Komponen Halaman Input Lokasi Payer
class KontenInputLokasiPayer extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [
        this.props.longitudeInputDefault,
        this.props.latitudeInputDefault
      ],
      zoom: this.props.zoomPetaDefault
    });

    map.on("move", () => {
      store.setState({
        longitudeInputDefault: map.getCenter().lng.toFixed(4),
        latitudeInputDefault: map.getCenter().lat.toFixed(4),
        zoomPetaDefault: map.getZoom().toFixed(2)
      });
      console.log(
        "lat , long : ",
        this.props.latitudeInputDefault,
        this.props.longitudeInputDefault
      );
    });
  }

  goToObjekPajak = () => {
    this.props.history.push("/payer/input-detil-objek-pajak");
  };

  goToInputGambarPajak = () => {
    this.props.history.push("/payer/input-gambar");
  };

  showMaps = () => {
    if (this.props.showInputLocation === "none") {
      store.setState({ showInputLocation: "flex" });
    } else {
      store.setState({ showInputLocation: "none" });
    }
  };
  render() {
    return (
      <div className="container kontenInputLokasiPayer">
        <div className="row">
          <div className="col-md-6 col-sm-12 colKotakFormInput">
            <div className="judulKonetenLokasiPayer">
              <span>LOKASI OBJEK PAJAK</span>
            </div>
            <div className="inputNamaObjekPajak">
              <span>Nama Objek Pajak :</span>
              <FormControl
                className="barInputLokasi"
                placeholder="Papan Nama Toko"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="namaObjekPajak"
                onChange={e => this.props.handleInput(e)}
              />
            </div>
            <div className="inputLokasiObjekPajak">
              <span>Lokasi Objek Pajak :</span>
              <div className="kotakInputLokasi">
                <InputGroup.Prepend className="kotakMaps">
                  <InputGroup.Text id="basic-addon1 kotakLogoPeta">
                    <img
                      onClick={() => this.showMaps()}
                      className="logoPeta"
                      src={mapsLogo}
                      alt=""
                    />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="barInputNamaObjek"
                  placeholder="Input Lokasi Reklame"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="namaObjekPajak"
                  onChange={e => this.props.handleInput(e)}
                />
              </div>
            </div>
            <div className="keterananTambahanLokasi">
              <span>Catatan :</span>
              <span>
                Pastikan titik pada peta sesuai dengan lokasi reklame yang
                dilaporkan
              </span>
            </div>
            <div className="rowButton">
              <div className="jarakButton">
                <Button
                  style={{ backgroundColor: "red" }}
                  onClick={() => this.goToInputGambarPajak()}
                >
                  Kembali
                </Button>
              </div>
              <div>
                <Button onClick={() => this.goToObjekPajak()}>Lanjutkan</Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 colKotakInputLokasi">
            <div
              className="kotakInputLokasi"
              style={{ display: this.props.showInputLocation }}
            >
              <div className="markerLokasi">
                <FaMapMarkerAlt />
              </div>
              <div
                ref={el => (this.mapContainer = el)}
                className="mapContainer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "showInputLocation, zoomPetaDefault, longitudeInputDefault, latitudeInputDefault",
  actions
)(withRouter(KontenInputLokasiPayer));
