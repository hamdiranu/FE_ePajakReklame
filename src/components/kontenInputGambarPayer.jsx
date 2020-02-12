import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Button } from "react-bootstrap";

// Kelas untuk Komponen Halaman Input Gambar Reklame Payer
class KontenInputGambarPayer extends React.Component {
  gambarToMaps = () => {
    this.props.history.push("/payer/input-lokasi");
  };
  render() {
    return (
      <div className="kontenInputGambarPayer">
        <div className="container-fluid">
          <div className="kotakPreviewGambar">
            <div className="isiKotakPreviewGambar">
              <h2 className="keteranganFoto">
                Mohon upload foto reklame yang akan dilaporkan
              </h2>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row infoInput">
              <div className="radioButtonJenisReklame">
                <div className="form-check form-check-inline ">
                  <input
                    className="bulletRadio"
                    onClick={e => this.props.handleInput(e)}
                    type="radio"
                    name="tipeReklame"
                    value="Non-Permanen"
                  />
                  <label className="form-check-label">Non-Permanen</label>
                </div>
                <div className="form-check form-check-inline jarakRadioButton">
                  <input
                    className="bulletRadio"
                    onClick={e => this.props.handleInput(e)}
                    type="radio"
                    name="tipeReklame"
                    value="permanen"
                  />
                  <label className="form-check-label">Permanen</label>
                </div>
                <Button
                  className="tombolLanjutkan"
                  onClick={() => this.gambarToMaps()}
                >
                  Lanjutkan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "payerInfo, daftarLaporanPayer, filterByDaftarLaporan",
  actions
)(withRouter(KontenInputGambarPayer));
