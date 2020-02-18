import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import mapsLogo from "../images/mapsLogo.png";
import mapboxgl from "mapbox-gl";
import { FaSearch } from "react-icons/fa";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtZGlyYW51IiwiYSI6ImNrNjkxdjF4aTBiOGczbGxqOWdocnhrN3kifQ.4x6Q9f7hcT-xSqZv4plNxA";

class KontenInputLokasiPayer extends React.Component {
  /**
   * Mengganti halaman menuju halaman input lokasi pada peta
   */
  showMaps = () => {
    this.props.history.push("/payer/input-lokasi/peta");
  };

  /**
   * Mencari lokasi berdasarkan kata kunci
   */
  handleSearchLokasi = async () => {
    await this.props.searchLokasi();
  };

  /**
   * Mengganti halaman menuju halaman input lokasi pada peta
   */
  handlePilihLokasi = async koordinat => {
    this.props.history.push("/payer/input-lokasi/peta");
  };

  /**
   * Mengganti halaman menuju halaman input detail objek pajak
   */
  goToObjekPajak = () => {
    this.props.history.push("/payer/input-detail-objek-pajak");
  };

  /**
   * Mengganti halaman menuju halaman input gambar objek pajak
   */
  goToInputGambarPajak = () => {
    this.props.history.push("/payer/input-gambar");
  };

  render() {
    return (
      <div className="container kontenInputLokasiPayer">
        <div className="row">
          <div className="col-md-3 col-sm-12"></div>
          <div className="col-md-6 col-sm-12 colKotakFormInput">
            <div className="row justify-content-center">
              <span>Nama Objek Pajak :</span>
            </div>
            <div className="container">
              <div className="row inputNamaObjekPajak justify-content-center">
                <FormControl
                  className="barInputNamaObjek"
                  placeholder="Papan Nama Toko"
                  name="namaObjekPajak"
                  value={this.props.namaObjekPajak}
                  onChange={e => this.props.handleInputPostNama(e)}
                />
              </div>
              <div
                className="row justify-content-center"
                style={{ marginBottom: "10px" }}
              >
                <span>Lokasi Objek Pajak :</span>
              </div>
              <div className="row justify-content-center">
                {localStorage.getItem("alamatReklamePayer") === null ? (
                  <textarea
                    className="barInputNamaObjek"
                    placeholder="Papan Nama Toko"
                    name="namaObjekPajak"
                    value="Lakukan pencarian lokasi !"
                    onChange={e => this.props.handleInputPostNama(e)}
                    disabled
                    style={{
                      height: "30px",
                      borderRadius: "5px",
                      padding: "0px 10px",
                      textAlign: "center",
                      marginBottom: "20px",
                      paddingTop: "2px"
                    }}
                  />
                ) : (
                  <textarea
                    className="barInputNamaObjek"
                    placeholder="Papan Nama Toko"
                    name="namaObjekPajak"
                    value={
                      localStorage.getItem("alamatReklamePayer") === null
                        ? "Lakukan pencarian lokasi terlebih dahulu!"
                        : localStorage.getItem("alamatReklamePayer")
                    }
                    onChange={e => this.props.handleInputPostNama(e)}
                    disabled
                    style={{
                      height: "100px",
                      textAlign: "center",
                      padding: "10px",
                      backgroundColor: "#DBE2F0",
                      color: "#17345F",
                      fontWeight: "600",
                      borderRadius: "5px",
                      marginBottom: "20px"
                    }}
                  />
                )}
                <div className="row kotakSearchLokasi">
                  <InputGroup.Prepend className="kotakMaps">
                    <InputGroup.Text id="basic-addon1 kotakLogoPetaPayer">
                      <img
                        onClick={() => this.showMaps()}
                        className="logoPeta"
                        src={mapsLogo}
                        alt=""
                      />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className="barInputLokasiPayer"
                    placeholder="Input Lokasi Reklame"
                    name="kataKunciLokasi"
                    onChange={e => this.props.handleInput(e)}
                  />
                  <div className="iconSearchLokasi">
                    <FaSearch onClick={() => this.handleSearchLokasi()} />
                  </div>
                </div>
              </div>
              {this.props.listRekomendasiLokasi.length === 0 ? (
                <div></div>
              ) : (
                <div>
                  <div className="row justify-content-center">
                    <span>Hasil Pencarian</span>
                  </div>
                  <div className="row justify-content-center">
                    {this.props.listRekomendasiLokasi.map((item, index) => {
                      return (
                        <div
                          className="barRekomendasiLokasi"
                          onClick={() => (
                            store.setState({
                              longitudeInputDefault: item.center[0],
                              latitudeInputDefault: item.center[1]
                            }),
                            this.props.history.push("/payer/input-lokasi/peta")
                          )}
                        >
                          <span>{item.place_name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="row rowButton justify-content-center">
              <Button
                className="buttonKembali"
                style={{
                  backgroundColor: "#E43C25",
                  border: "1px solid #E43C25",
                  borderRadius: "5px"
                }}
                onClick={() => this.goToInputGambarPajak()}
              >
                Kembali
              </Button>
              {(localStorage.getItem("namaObjekPajak") !== null) &
              (localStorage.getItem("longitudeReklamePayer") !== null) &
              (localStorage.getItem("latitudeReklamePayer") !== null) &
              (localStorage.getItem("alamatReklamePayer") !== null) ? (
                <Button
                  onClick={() => this.goToObjekPajak()}
                  style={{
                    backgroundColor: "#486FB6",
                    border: "1px solid #486FB6",
                    borderRadius: "5px"
                  }}
                >
                  Lanjutkan
                </Button>
              ) : (
                <Button
                  disabled
                  style={{
                    backgroundColor: "#486FB6",
                    border: "1px solid #486FB6",
                    borderRadius: "5px"
                  }}
                >
                  Lanjutkan
                </Button>
              )}
            </div>
          </div>
          <div className="col-md-3 col-sm-12"></div>
        </div>
      </div>
    );
  }
}

export default connect(
  "listRekomendasiLokasi, lokasiReklame, namaObjekPajak",
  actions
)(withRouter(KontenInputLokasiPayer));
