import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

class KontenBerandaOfficer extends React.Component {
  render() {
    return (
      <div className="kontenBerandaOfficer">
        <div style={{ textAlign: "center" }}>
          <h2 className="judulHomeOfficer">Daftar SSPD</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-4 cariSspdMobile">
              <form onSubmit={e => e.preventDefault(e)}>
                <span>Cari berdasarkan SSPD :</span>
                <div className="officerCariSSPD">
                  <input
                    type={this.props.statusInputPassword}
                    id="pin"
                    className="col-md-11 col-sm-7 fadeIn second inputSSPD"
                    name="pin"
                    placeholder="Masukkan SSPD"
                    onChange={e => this.props.handleInput(e)}
                  />
                  <FaSearch onClick={e => this.props.showPassword(e)} />
                </div>
              </form>
            </div>
            <div className="col-md-2 col-sm-6 tombolTambahSSPD">
              <Button variant="primary">Tambah Data</Button>
            </div>
          </div>
          <div>
            <ul class="listSspd">
              <li class="list-group-item dh">
                <div class="row">
                  <div class="col no-sspd">Nomor SSPD</div>
                  <div class="col nama-wp">Nama WP</div>
                  <div class="col nama-reklame">Nama Reklame</div>
                  <div class="col jenis-reklame">Jenis Reklame (Qty)</div>
                  <div class="col status">Status</div>
                  <div class="col kodeQr">QR Code</div>
                </div>
              </li>
              <li class="list-group-item dt">
                <div class="row">
                  <div class="col-8 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                    12345678123123
                  </div>
                  <div class="col-4 col-sm order-sm-5 statusValidasi dt-small dt-right dt-bold">
                    Belum Tervalidasi
                  </div>
                  <div class="col-8 col-sm order-sm-2 namaWp dt-title">
                    PT Adi Karya Makmur
                  </div>
                  <div class="col-4 col-sm order-sm-6 kodeQr dt-right">
                    <Button className="btn btn-xs" variant="success">
                      Generate Kode QR
                    </Button>
                  </div>
                  <div class="col-auto col-sm order-sm-3 namaReklame dt-small">
                    Reklame Muka Depan
                  </div>
                  <div class="col-auto col-sm order-sm-4 jenisReklame dt-small">
                    Billboard (100)
                  </div>
                </div>
              </li>

              <li class="list-group-item dt">
                <div class="row">
                  <div class="col-8 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                    12345678123123
                  </div>
                  <div class="col-4 col-sm order-sm-5 statusValidasi dt-small dt-right dt-bold">
                    Belum Tervalidasi
                  </div>
                  <div class="col-8 col-sm order-sm-2 namaWp dt-title">
                    PT Adi Karya Makmur
                  </div>
                  <div class="col-4 col-sm order-sm-6 kodeQr dt-right">
                    <a
                      href="https://www.google.com/"
                      class="btn btn-success btn-xs"
                    >
                      Generate Kode QR
                    </a>
                  </div>
                  <div class="col-auto col-sm order-sm-3 namaReklame dt-small">
                    Reklame Muka Depan
                  </div>
                  <div class="col-auto col-sm order-sm-4 jenisReklame dt-small">
                    Billboard (100)
                  </div>
                </div>
              </li>
              <li class="list-group-item dt">
                <div class="row">
                  <div class="col-8 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                    12345678123123
                  </div>
                  <div class="col-4 col-sm order-sm-5 statusValidasi dt-small dt-right dt-bold">
                    Belum Tervalidasi
                  </div>
                  <div class="col-8 col-sm order-sm-2 namaWp dt-title">
                    PT Adi Karya Makmur
                  </div>
                  <div class="col-4 col-sm order-sm-6 kodeQr dt-right">
                    <Button className="btn btn-xs" variant="success">
                      Generate Kode QR
                    </Button>
                  </div>
                  <div class="col-auto col-sm order-sm-3 namaReklame dt-small">
                    Reklame Muka Depan
                  </div>
                  <div class="col-auto col-sm order-sm-4 jenisReklame dt-small">
                    Billboard (100)
                  </div>
                </div>
              </li>
              <li class="list-group-item dt">
                <div class="row">
                  <div class="col-8 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                    12345678123123
                  </div>
                  <div class="col-4 col-sm order-sm-5 statusValidasi dt-small dt-right dt-bold">
                    Sudah Tervalidasi
                    <br />
                    <a href="https://www.google.com/">
                      <small class="text-danger">Lihat pelanggaran</small>
                    </a>
                  </div>
                  <div class="col-8 col-sm order-sm-2 namaWp dt-title">
                    PT Adi Karya Makmur
                  </div>
                  <div class="col-4 col-sm order-sm-6 kodeQr dt-right">
                    <Button className="btn btn-xs" variant="success">
                      Generate Kode QR
                    </Button>
                  </div>
                  <div class="col-auto col-sm order-sm-3 namaReklame dt-small">
                    Reklame Muka Depan
                  </div>
                  <div class="col-auto col-sm order-sm-4 jenisReklame dt-small">
                    Billboard (100)
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("", actions)(withRouter(KontenBerandaOfficer));
