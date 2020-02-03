import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Button } from "react-bootstrap";
import { FaSearch, FaDownload } from "react-icons/fa";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { TiArrowBackOutline } from "react-icons/ti";
import { AiFillPrinter } from "react-icons/ai";

class KontenDaftarKodeQrOfficer extends React.Component {
  render() {
    return (
      <div className="kontenBerandaOfficer">
        <div className="container">
          <div className="col-md-2" style={{ paddingLeft: "0px" }}>
            <div className="tombolBacktoDaftarSSPD">
              <TiArrowBackOutline />
              <div style={{ paddingTop: "3px", paddingLeft: "3px" }}>
                <span>Kembali</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 className="judulHomeOfficer">Daftar Kode QR</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="container">
                <div style={{ marginBottom: "20px", display: "grid" }}>
                  <span>No. SSPD : 12345678</span>
                  <span>
                    Nama Reklame : Iklan Perumahan <br />
                    <a href="https://www.google.com/">
                      <small class="text-danger">Lihat pelanggaran</small>
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <form onSubmit={e => e.preventDefault(e)}>
                  <span>Cari berdasarkan ID :</span>
                  <div className="officerCariID">
                    <input
                      style={{ width: "170px" }}
                      type={this.props.statusInputPassword}
                      id="pin"
                      className="col-md-6 col-sm-6 fadeIn second inputSSPD"
                      name="pin"
                      placeholder="Masukkan ID"
                      onChange={e => this.props.handleInput(e)}
                    />
                    <FaSearch onClick={e => this.props.showPassword(e)} />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4" style={{ margin: "auto" }}>
              <div className="row">
                <div className="col-md-12 col-sm-4 tombolPrintSemuaQr">
                  <div style={{ margin: "auto" }}>
                    <span>Cetak semua kode QR : </span>
                  </div>
                  <div>
                    <Button
                      style={{ width: "73px", textAlign: "center" }}
                      variant="primary"
                    >
                      Print
                    </Button>
                  </div>
                </div>
                <div className="col-md-12 col-sm-4 tombolDownloadSemuaQr">
                  <div style={{ margin: "auto" }}>
                    <span>Unduh semua kode QR : </span>
                  </div>
                  <div>
                    <Button
                      style={{ width: "fit-content", textAlign: "center" }}
                      variant="primary"
                    >
                      Unduh
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul class="listSspd">
              <li class="list-group-item dh">
                <div class="row">
                  <div class="col no-sspd">ID</div>
                  <div class="col nama-wp">Kode Unik</div>
                  <div class="col nama-reklame">Status Scan</div>
                  <div class="col jenis-reklame">Cetak Kode QR</div>
                  <div class="col status">Unduh Kode QR</div>
                </div>
              </li>
              <li class="list-group-item dt">
                <div class="row">
                  <div class="col-8 col-sm order-sm-1 no-sspd dt-small">1</div>
                  <div class="col-4 col-sm order-sm-5 tombolCetakKodeQrSatuan dt-small dt-right dt-bold">
                    <AiFillPrinter />
                  </div>
                  <div class="col-8 col-sm order-sm-2 nama-wp dt-title">
                    ABC123asdaasd76sad87sat
                  </div>
                  <div class="col-4 col-sm order-sm-6 tombolDownloadKodeQrSatuan dt-right">
                    <FaDownload />
                  </div>
                  <div class="col-auto col-sm order-sm-3 statusSudahScan dt-small">
                    <AiFillCheckCircle />
                  </div>
                </div>
              </li>
              <li class="list-group-item dt">
                <div class="row">
                  <div class="col-8 col-sm order-sm-1 no-sspd dt-small">2</div>
                  <div class="col-4 col-sm order-sm-5 tombolCetakKodeQrSatuan dt-small dt-right dt-bold">
                    <AiFillPrinter />
                  </div>
                  <div class="col-8 col-sm order-sm-2 nama-wp dt-title">
                    ABC123asdaasd76sad87sat
                  </div>
                  <div class="col-4 col-sm order-sm-6 tombolDownloadKodeQrSatuan dt-right">
                    <FaDownload />
                  </div>
                  <div class="col-auto col-sm order-sm-3 statusSudahScan dt-small">
                    <AiFillCheckCircle />
                  </div>
                </div>
              </li>
              <li class="list-group-item dt">
                <div class="row">
                  <div class="col-8 col-sm order-sm-1 no-sspd dt-small">3</div>
                  <div class="col-4 col-sm order-sm-5 tombolCetakKodeQrSatuan dt-small dt-right dt-bold">
                    <AiFillPrinter />
                  </div>
                  <div class="col-8 col-sm order-sm-2 nama-wp dt-title">
                    ABC123asdaasd76sad87sat
                  </div>
                  <div class="col-4 col-sm order-sm-6 tombolDownloadKodeQrSatuan dt-right">
                    <FaDownload />
                  </div>
                  <div class="col-auto col-sm order-sm-3 statusSudahScan dt-small">
                    <AiFillCheckCircle />
                  </div>
                </div>
              </li>
              <li class="list-group-item dt">
                <div class="row">
                  <div class="col-8 col-sm order-sm-1 no-sspd dt-small">4</div>
                  <div class="col-4 col-sm order-sm-5 tombolCetakKodeQrSatuan dt-small dt-right dt-bold">
                    <AiFillPrinter />
                  </div>
                  <div class="col-8 col-sm order-sm-2 nama-wp dt-title">
                    ABC123asdaasd76sad87sat
                  </div>
                  <div class="col-4 col-sm order-sm-6 tombolDownloadKodeQrSatuan dt-right">
                    <FaDownload />
                  </div>
                  <div class="col-auto col-sm order-sm-3 statusBelumScan dt-small">
                    <AiFillCloseCircle />
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

export default connect("", actions)(withRouter(KontenDaftarKodeQrOfficer));
