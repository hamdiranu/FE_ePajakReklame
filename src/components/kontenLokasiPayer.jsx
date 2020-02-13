import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import mapsLogo from "../images/mapsLogo.png";
import mapboxgl from "mapbox-gl";
import { FaSearch} from "react-icons/fa";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtZGlyYW51IiwiYSI6ImNrNjkxdjF4aTBiOGczbGxqOWdocnhrN3kifQ.4x6Q9f7hcT-xSqZv4plNxA";

// Kelas untuk Komponen Halaman Input Lokasi Payer
class KontenInputLokasiPayer extends React.Component {

  showMaps = () => {
    this.props.history.push("/payer/input-lokasi/peta")
  }

  handleSearchLokasi = async () => {
    await this.props.searchLokasi();
  };

  handlePilihLokasi = async (koordinat) => {
    this.props.history.push("/payer/input-lokasi/peta")

  }

  goToObjekPajak = () => {
    localStorage.setItem("objekReklamePayer",this.props.namaObjekPajak)
    this.props.history.push("/payer/input-detail-objek-pajak");
  };

  goToInputGambarPajak = () => {
    this.props.history.push("/payer/input-gambar");
  };

  render() {
    return (
      <div className="container kontenInputLokasiPayer">
        <div className="row">
          <div className="col-md-3 col-sm-12">
          </div> 
          <div className="col-md-6 col-sm-12 colKotakFormInput">
            <div className="row justify-content-center">
              <span>Nama Objek Pajak :</span>
            </div>
            <div className="row inputNamaObjekPajak justify-content-center">
              <FormControl
                className="barInputNamaObjek"
                placeholder="Papan Nama Toko"
                name="namaObjekPajak"
                value={this.props.namaObjekPajak}
                onChange={e => this.props.handleInput(e)}
              />
            </div>
            <div className="row justify-content-center">
              <span>Lokasi Objek Pajak :</span>
            </div>
            <div className="row justify-content-center">
              {localStorage.getItem("alamatReklamePayer") === null
              ? <div></div>
              : <span>{localStorage.getItem("alamatReklamePayer")}</span>
              }
              <div className="row kotakSearchLokasi">
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
                  className="barInputLokasi"
                  placeholder="Input Lokasi Reklame"
                  name="kataKunciLokasi"
                  onChange={e => this.props.handleInput(e)}
                />
                <div className="iconSearchLokasi">
                  <FaSearch onClick={() => this.handleSearchLokasi()}/>
                </div>
              </div>
            </div>
            {this.props.listRekomendasiLokasi.length === 0
            ? <div></div>
            : 
            <div>
              <div className="row justify-content-center">
                <span>Hasil Pencarian</span>
              </div>
              <div className="row justify-content-center">
                {this.props.listRekomendasiLokasi.map((item, index) => {
                  return (
                    <div className="barRekomendasiLokasi" 
                    onClick={() => (
                      store.setState({longitudeInputDefault:item.center[0], latitudeInputDefault:item.center[1]}),
                      this.props.history.push("/payer/input-lokasi/peta"))
                    }>
                      <span>{item.place_name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            }
            <div className="row rowButton justify-content-center">
              <Button
                className="buttonKembali"
                style={{ backgroundColor: "red" }}
                onClick={() => this.goToInputGambarPajak()}
              >
                Kembali
              </Button>
              <Button onClick={() => this.goToObjekPajak()}>
                Lanjutkan
              </Button>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "listRekomendasiLokasi, lokasiReklame, namaObjekPajak",
  actions
)(withRouter(KontenInputLokasiPayer));
