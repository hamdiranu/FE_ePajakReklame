import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Button, Form } from "react-bootstrap";
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
                  <Form.Control
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
            <ul className="listSspd">
              <li className="list-group-item dh">
                <div className="row">
                  <div className="col no-sspd">Nomor SSPD</div>
                  <div className="col nama-wp">Nama WP</div>
                  <div className="col nama-reklame">Nama Reklame</div>
                  <div className="col jenis-reklame">Jenis Reklame (Qty)</div>
                  <div className="col status">Status</div>
                  <div className="col kodeQr">QR Code</div>
                </div>
              </li>
              <li className="list-group-item dt">
                <div className="row">
                  <div className="col-8 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                    12345678123123
                  </div>
                  <div className="col-4 col-sm order-sm-5 statusValidasi dt-small dt-right dt-bold">
                    Belum Tervalidasi
                  </div>
                  <div className="col-8 col-sm order-sm-2 namaWp dt-title">
                    PT Adi Karya Makmur
                  </div>
                  <div className="col-4 col-sm order-sm-6 kodeQr dt-right">
                    <Button className="btn btn-xs" variant="success">
                      Generate Kode QR
                    </Button>
                  </div>
                  <div className="col-auto col-sm order-sm-3 namaReklame dt-small">
                    Reklame Muka Depan
                  </div>
                  <div className="col-auto col-sm order-sm-4 jenisReklame dt-small">
                    Billboard (100)
                  </div>
                </div>
              </li>

              <li className="list-group-item dt">
                <div className="row">
                  <div className="col-8 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                    12345678123123
                  </div>
                  <div className="col-4 col-sm order-sm-5 statusValidasi dt-small dt-right dt-bold">
                    Belum Tervalidasi
                  </div>
                  <div className="col-8 col-sm order-sm-2 namaWp dt-title">
                    PT Adi Karya Makmur
                  </div>
                  <div className="col-4 col-sm order-sm-6 kodeQr dt-right">
                    <Button className="btn btn-xs" variant="success">
                      Generate Kode QR
                    </Button>
                  </div>
                  <div className="col-auto col-sm order-sm-3 namaReklame dt-small">
                    Reklame Muka Depan
                  </div>
                  <div className="col-auto col-sm order-sm-4 jenisReklame dt-small">
                    Billboard (100)
                  </div>
                </div>
              </li>
              <li className="list-group-item dt">
                <div className="row">
                  <div className="col-8 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                    12345678123123
                  </div>
                  <div className="col-4 col-sm order-sm-5 statusValidasi dt-small dt-right dt-bold">
                    Belum Tervalidasi
                  </div>
                  <div className="col-8 col-sm order-sm-2 namaWp dt-title">
                    PT Adi Karya Makmur
                  </div>
                  <div className="col-4 col-sm order-sm-6 kodeQr dt-right">
                    <Button className="btn btn-xs" variant="success">
                      Generate Kode QR
                    </Button>
                  </div>
                  <div className="col-auto col-sm order-sm-3 namaReklame dt-small">
                    Reklame Muka Depan
                  </div>
                  <div className="col-auto col-sm order-sm-4 jenisReklame dt-small">
                    Billboard (100)
                  </div>
                </div>
              </li>
              <li className="list-group-item dt">
                <div className="row">
                  <div className="col-8 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                    12345678123123
                  </div>
                  <div className="col-4 col-sm order-sm-5 statusValidasi dt-small dt-right dt-bold">
                    Sudah Tervalidasi
                    <br />
                    <a href="https://www.google.com/">
                      <small className="text-danger">Lihat pelanggaran</small>
                    </a>
                  </div>
                  <div className="col-8 col-sm order-sm-2 namaWp dt-title">
                    PT Adi Karya Makmur
                  </div>
                  <div className="col-4 col-sm order-sm-6 kodeQr dt-right">
                    <Button className="btn btn-xs" variant="success">
                      Generate Kode QR
                    </Button>
                  </div>
                  <div className="col-auto col-sm order-sm-3 namaReklame dt-small">
                    Reklame Muka Depan
                  </div>
                  <div className="col-auto col-sm order-sm-4 jenisReklame dt-small">
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
