import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Button, FormControl } from "react-bootstrap";

// Kelas untuk Komponen Halaman Beranda Payer
class KontenInputGambarPayer extends React.Component {
  goToLokasiPajak = () => {
    this.props.history.push("/payer/input-lokasi");
  };

  goToInfoPajak = () => {
    this.props.history.push("/payer/input-informasi-pajak");
  };
  render() {
    return (
      <div className="container kontenInputDetailObjek">
        <div className="juduKontenDetailObjekPajak">
          <span>DETAIL OBJEK PAJAK</span>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
            <div className="inputDetailObjekPajak">
              <span>Judul</span>
              <FormControl
                className="barInputDetail"
                placeholder="Papan Nama Toko"
                aria-label="judul"
                aria-describedby="basic-addon1"
                name="judulObjekPajak"
                onChange={e => this.props.handleInput(e)}
              />
            </div>
            <div className="inputDetailObjekPajak">
              <span>Jenis Reklame</span>
              <div className="kotakInputLokasi">
                <select
                  onChange={e => this.props.handleInput(e)}
                  name="jenisObjekPajak"
                  class="custom-select"
                >
                  <option value="" selected disabled>
                    pilih
                  </option>
                  <option value="bilboard">Bilboard / Bando</option>
                </select>
              </div>
            </div>
            <div className="inputDetailObjekPajak">
              <span>Tarif Tambahan</span>
              <div className="kotakInputLokasi">
                <select
                  onChange={e => this.props.handleInput(e)}
                  name="tarifTambahan"
                  class="custom-select"
                >
                  <option value="" selected disabled>
                    pilih
                  </option>
                  <option value="ELEKTRONIK">Non-Rokok / Miras - 0%</option>
                </select>
              </div>
            </div>
            <div className="inputDetailObjekPajak">
              <span>Sudut Pandang</span>
              <div className="kotakInputLokasi">
                <select
                  onChange={e => this.props.handleInput(e)}
                  name="sudutPandang"
                  class="custom-select"
                >
                  <option value="" selected disabled>
                    pilih
                  </option>
                  <option value="1">1 sisi</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div style={{ display: "flex" }}>
              <div className="col-4">
                <span>Panjang</span>
                <div className="kotakInputLokasi">
                  <FormControl
                    className="barInputDetail"
                    placeholder="0"
                    aria-label="judul"
                    aria-describedby="basic-addon1"
                    name="panjangObjekPajak"
                    onChange={e => this.props.handleInput(e)}
                  />
                </div>
              </div>
              <div className="col-4">
                <span>Lebar</span>
                <div className="kotakInputLokasi">
                  <FormControl
                    className="barInputDetail"
                    placeholder="0"
                    aria-label="judul"
                    aria-describedby="basic-addon1"
                    name="lebarObjekPajak"
                    onChange={e => this.props.handleInput(e)}
                  />
                </div>
              </div>
              <div className="col-4">
                <span>Luas</span>
                <div className="kotakLuas">{this.props.luasObjekPajak}</div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="col-4">
                <span>Muka</span>
                <div className="kotakInputLokasi">
                  <FormControl
                    className="barInputDetail"
                    placeholder="0"
                    aria-label="judul"
                    aria-describedby="basic-addon1"
                    name="mukaObjekPajak"
                    onChange={e => this.props.handleInput(e)}
                  />
                </div>
              </div>
              <div className="col-4">
                <span>Ketinggian</span>
                <div className="kotakInputLokasi">
                  <FormControl
                    className="barInputDetail"
                    placeholder="0"
                    aria-label="judul"
                    aria-describedby="basic-addon1"
                    name="ketinggianObjekPajak"
                    onChange={e => this.props.handleInput(e)}
                  />
                </div>
              </div>
              <div className="col-4">
                <span>Jumlah</span>
                <div className="kotakInputLokasi">
                  <FormControl
                    className="barInputDetail"
                    placeholder="0"
                    aria-label="judul"
                    aria-describedby="basic-addon1"
                    name="jumlahReklameObjekPajak"
                    onChange={e => this.props.handleInput(e)}
                  />
                </div>
              </div>
            </div>
            <div className="inputDetailObjekPajak">
              <span>Letak Pemasangan</span>
              <FormControl
                className="barInputDetail"
                placeholder="Papan Nama Toko"
                aria-label="judul"
                aria-describedby="basic-addon1"
                name="letakPemasanganObjekPajak"
                onChange={e => this.props.handleInput(e)}
              />
            </div>
            <div className="inputDetailObjekPajak">
              <span>Klasifikasi Jalan</span>
              <FormControl
                className="barInputDetail"
                placeholder="Papan Nama Toko"
                aria-label="judul"
                aria-describedby="basic-addon1"
                name="klasifikasiJalanObjekPajak"
                onChange={e => this.props.handleInput(e)}
              />
            </div>
          </div>
          <div className="container-fluid">
            <div className="rowButtonDetail">
              <div className="jarakButton">
                <Button
                  style={{ backgroundColor: "red" }}
                  onClick={() => this.goToLokasiPajak()}
                >
                  Kembali
                </Button>
              </div>
              <div>
                <Button onClick={() => this.goToInfoPajak()}>Lanjutkan</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "luasObjekPajak",
  actions
)(withRouter(KontenInputGambarPayer));
