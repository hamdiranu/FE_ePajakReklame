import React from "react";
import "../styles/styleHomeOfficer.css";
import "../styles/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Button } from "react-bootstrap";
import { FaSearch, FaDownload } from "react-icons/fa";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { TiArrowBackOutline } from "react-icons/ti";

class ListQrCode extends React.Component {
  render() {
    return (
      <div className="bodyHomeOfficer">
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
            <div className="col-md-4">
              <div style={{ marginBottom: "20px", display: "grid" }}>
                <span>No. SSPD : 12345678</span>
                <span>Nama Reklame : Iklan Perumahan </span>
              </div>
              <form onSubmit={e => e.preventDefault(e)}>
                <span>Cari berdasarkan ID :</span>
                <div className="officerCariID">
                  <input
                    style={{ width: "215px" }}
                    type={this.props.statusInputPassword}
                    id="pin"
                    className="col-md-11 col-sm-10 fadeIn second inputSSPD"
                    name="pin"
                    placeholder="Masukkan ID"
                    onChange={e => this.props.handleInput(e)}
                  />
                  <FaSearch onClick={e => this.props.showPassword(e)} />
                </div>
              </form>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-2 tombolTambahSSPD">
              <Button variant="primary">Unduh Semua Kode QR</Button>
            </div>
          </div>
          <div className="table-responsive tabelSSPD">
            <table class="table table-striped table-hover kotakTableSSPD">
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>ID</th>
                  <th style={{ textAlign: "center" }}>Kode Unik</th>
                  <th style={{ textAlign: "center" }}>Unduh Kode QR</th>
                  <th style={{ textAlign: "center" }}>Status Scan</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <td>1</td>
                  <td>ABC123asdaasd76sad87sat</td>
                  <td>
                    <div className="tombolDownloadKodeQrSatuan">
                      <FaDownload />
                    </div>
                  </td>
                  <td>
                    <div className="statusSudahScan">
                      <AiFillCheckCircle />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ABC123asdaasd76sad87sat</td>
                  <td>
                    <div className="tombolDownloadKodeQrSatuan">
                      <FaDownload />
                    </div>
                  </td>
                  <td>
                    <div className="statusSudahScan">
                      <AiFillCheckCircle />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ABC123asdaasd76sad87sat</td>
                  <td>
                    <div className="tombolDownloadKodeQrSatuan">
                      <FaDownload />
                    </div>
                  </td>
                  <td>
                    <div className="statusBelumScan">
                      <AiFillCloseCircle />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("", actions)(withRouter(ListQrCode));
