import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Kelas untuk Komponen Halaman Beranda Payer
class KontenInputGambarPayer extends React.Component {
  goToDetailObjekPajak = () => {
    this.props.history.push("/payer/input-detail-objek-pajak");
  };

  goToNotaPajak = () => {
    this.props.history.push("/payer/nota-pajak");
  };

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="container kontenInputDetailObjek">
        <div className="juduKontenDetailObjekPajak">
          <span>INFORMASI PAJAK</span>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 ">
            <div className="inputDetailObjekPajak">
              <span>Masa Pajak</span>
              <div style={{ display: "flex" }}>
                <div className="col-6" style={{ paddingLeft: "0px" }}>
                  <select
                    onChange={e => this.props.handleInput(e)}
                    name="masaPajakBulan"
                    class="custom-select"
                  >
                    <option value="" selected disabled>
                      Bulan
                    </option>
                    <option value="Januari">Januari</option>
                    <option value="Februari">Februari</option>
                    <option value="Maret">Maret</option>
                    <option value="April">April</option>
                    <option value="Mei">Mei</option>
                    <option value="Juni">Juni</option>
                    <option value="Juli">Juli</option>
                    <option value="Agustus">Agustus</option>
                    <option value="September">September</option>
                    <option value="Oktober">Oktober</option>
                    <option value="Novermber">Novermber</option>
                    <option value="Desember">Desember</option>
                  </select>
                </div>
                <div className="col-6" style={{ paddingRight: "0px" }}>
                  <select
                    onChange={e => this.props.handleInput(e)}
                    name="masaPajakTahun"
                    class="custom-select"
                  >
                    <option value="" selected disabled>
                      Tahun
                    </option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="inputDetailObjekPajak">
              <span>Jangka Waktu Pajak</span>
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
            <div className="inputPeriodeObjekPajak">
              <span>Periode Berlaku Pajak </span>
              <div className="container-fluid" style={{ display: "flex" }}>
                <div className="col-5 mulaiPeriode">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-2 hingga">
                  <span>Hingga</span>
                </div>
                <div className="col-5 akhirPeriode">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="rowButtonInfo">
              <div className="jarakButton">
                <Button
                  style={{ backgroundColor: "red" }}
                  onClick={() => this.goToDetailObjekPajak()}
                >
                  Kembali
                </Button>
              </div>
              <div>
                <Button onClick={() => this.goToNotaPajak()}>Lanjutkan</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("", actions)(withRouter(KontenInputGambarPayer));
