import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

// Kelas untuk Komponen Halaman Input Gambar Reklame Payer
class KontenInputGambarPayer extends React.Component {
  gambarToMaps = () => {
    this.props.history.push("/payer/input-lokasi");
  };
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  };
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
    store.setState({blobGambar: URL.createObjectURL(event.target.files[0]),
      objekGambar:event.target.files[0]});
    localStorage.setItem(`fotoReklamePayer`, `${URL.createObjectURL(event.target.files[0])}`);
  };
  render() {
    return (
      <div className="kontenInputGambarPayer">
        <div className="container-fluid">
          <div className="py-3">
            <div
              className="isiKotakPreviewGambar"
              style={{ width: "81vw", maxWidth: "550px" }}
            >
              {localStorage.getItem("fotoReklamePayer") === null ? (
                <div
                  style={{
                    height: "61vh",
                    width: "80vw",
                    maxWidth: "548px",
                    paddingTop: "27vh",
                    paddingBottom: "27vh"
                  }}
                >
                  <h5 className="mb-0 mx-3">
                    Mohon upload foto reklame yang akan dilaporkan
                  </h5>
                </div>
              ) : (
                <div>
                  <img
                    src={localStorage.getItem("fotoReklamePayer")}
                    style={{ width: "80vw", maxWidth: "548px" }}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
          <div className="container">
            <div className="row infoInput">
              <div className="radioButtonJenisReklame">
                <div className="form-check form-check-inline ">
                  {localStorage.getItem("tipeReklamePayer") ===
                  "Reklame Non Permanen" ? (
                    <input
                      className="bulletRadio"
                      onClick={e => this.props.handleInput(e)}
                      type="radio"
                      name="tipeReklame"
                      value="Reklame Non Permanen"
                      id="non-permanen"
                      checked="checked"
                    />
                  ) : (
                    <input
                      className="bulletRadio"
                      onClick={e => this.props.handleInput(e)}
                      type="radio"
                      name="tipeReklame"
                      value="Reklame Non Permanen"
                      id="non-permanen"
                    />
                  )}
                  <label for="non-permanen" className="form-check-label">
                    Non-Permanen
                  </label>
                </div>
                <div className="form-check form-check-inline jarakRadioButton">
                  {localStorage.getItem("tipeReklamePayer") ===
                  "Reklame Permanen" ? (
                    <input
                      className="bulletRadio"
                      onClick={e => this.props.handleInput(e)}
                      type="radio"
                      name="tipeReklame"
                      value="Reklame Permanen"
                      id="permanen"
                      checked="checked"
                    />
                  ) : (
                    <input
                      className="bulletRadio"
                      onClick={e => this.props.handleInput(e)}
                      type="radio"
                      name="tipeReklame"
                      value="Reklame Permanen"
                      id="permanen"
                    />
                  )}
                  <label for="permanen" className="form-check-label">
                    Permanen
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-2" style={{ marginBottom: "20px" }}>
              <div className="col-md-6 text-center" style={{ width: "50%" }}>
                <Link
                  to="/payer/home"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#E43C25",
                    border: "1px solid #E43C25",
                    borderRadius: "5px"
                  }}
                >
                  Beranda
                </Link>
              </div>
              <div
                className="col-md-6 text-center"
                style={{
                  width: "50%"
                }}
              >
                {(localStorage.getItem("fotoReklamePayer") !== null) &
                (localStorage.getItem("tipeReklamePayer") !== null) ? (
                  <Link
                    to="/payer/input-lokasi"
                    style={{
                      backgroundColor: "#486FB6",
                      border: "1px solid #486FB6",
                      borderRadius: "5px"
                    }}
                    className="btn btn-primary"
                  >
                    Lanjutkan
                  </Link>
                ) : (
                  <Link
                    className="btn btn-primary disabled"
                    style={{
                      backgroundColor: "#486FB6",
                      border: "1px solid #486FB6",
                      borderRadius: "5px"
                    }}
                  >
                    Lanjutkan
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "payerInfo, daftarLaporanPayer, filterByDaftarLaporan, blobGambar, tipeReklame",
  actions
)(withRouter(KontenInputGambarPayer));
