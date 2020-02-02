import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

class KontenBerandaOfficer extends React.Component {
  render() {
    return (
      <div className="bodyHomeOfficer">
        <div style={{ textAlign: "center" }}>
          <h2 className="judulHomeOfficer">Daftar SSPD</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={e => e.preventDefault(e)}>
                <span>Cari berdasarkan SSPD :</span>
                <div className="officerCariSSPD">
                  <input
                    type={this.props.statusInputPassword}
                    id="pin"
                    className="col-md-11 col-sm-10 fadeIn second inputSSPD"
                    name="pin"
                    placeholder="Masukkan SSPD"
                    onChange={e => this.props.handleInput(e)}
                  />
                  <FaSearch onClick={e => this.props.showPassword(e)} />
                </div>
              </form>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-2 tombolTambahSSPD">
              <Button variant="primary">Tambah Data</Button>
            </div>
          </div>
          <div className="table-responsive tabelSSPD">
            <table class="table table-striped table-hover kotakTableSSPD">
              <thead>
                <tr>
                  <th style={{ width: "10px", textAlign: "center" }}>
                    No SSPD
                  </th>
                  <th style={{ width: "157px", textAlign: "center" }}>
                    Nama Wajib Pajak
                  </th>
                  <th style={{ width: "123px", textAlign: "center" }}>
                    Nama Reklame
                  </th>
                  <th style={{ width: "166px", textAlign: "center" }}>
                    Jenis Reklame (Qty)
                  </th>
                  <th style={{ width: "10px", textAlign: "center" }}>Status</th>
                  <th style={{ width: "10px", textAlign: "center" }}>
                    Pelanggaran
                  </th>
                  <th style={{ width: "10px", textAlign: "center" }}>
                    QR Code
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12345678</td>
                  <td>PT Bangun Jaya</td>
                  <td>Iklan Perumahan</td>
                  <td>Spanduk (100)</td>
                  <td>True</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus quis dui vitae odio ullamcorper aliquet. Vivamus
                    iaculis ante leo, sed vulputate tortor consectetur ac.
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button class="buttonGenerateQR">Generate</button>
                  </td>
                </tr>
                <tr>
                  <td>12345678</td>
                  <td>PT Bangun Jaya</td>
                  <td>Iklan Perumahan</td>
                  <td>Spanduk (100)</td>
                  <td>True</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus quis dui vitae odio ullamcorper aliquet. Vivamus
                    iaculis ante leo, sed vulputate tortor consectetur ac.
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button class="buttonGenerateQR">Generate</button>
                  </td>
                </tr>
                <tr>
                  <td>12345678</td>
                  <td>PT Bangun Jaya</td>
                  <td>Iklan Perumahan</td>
                  <td>Spanduk (100)</td>
                  <td>True</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus quis dui vitae odio ullamcorper aliquet. Vivamus
                    iaculis ante leo, sed vulputate tortor consectetur ac.
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button class="buttonGenerateQR">Generate</button>
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

export default connect("", actions)(withRouter(KontenBerandaOfficer));
