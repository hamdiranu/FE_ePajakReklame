import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

// Kelas untuk Komponen Halaman Input Informasi Payer
class KontenInformasiPajakPayer extends React.Component {
  goToDetailObjekPajak = () => {
    this.props.history.push("/payer/input-detail-objek-pajak");
  };

  goToNotaPajak = () => {
    this.props.putInputPayer();
    this.props.history.push("/payer/nota-pajak");
  };

  constructor(props) {
    super(props);
    this.handleDayClickAwal = this.handleDayClickAwal.bind(this);
    this.handleDayClickAkhir = this.handleDayClickAkhir.bind(this);
    this.state = {
      selectedDayAwal: null,
      selectedDayAkhir: null
    };
  }

  handleDayClickAwal(day, { selected }) {
    store.setState({
      periodePemasangan: selected ? undefined : day
    });
    localStorage.setItem(
      "tanggalPemasangan",
      convert(store.getState().periodePemasangan)
    );
  }

  handleDayClickAkhir(day, { selected }) {
    store.setState({
      periodePembongkaran: selected ? undefined : day
    });
    localStorage.setItem(
      "tanggalPembongkaran",
      convert(store.getState().periodePembongkaran)
    );
  }

  render() {
    // const FORMAT = 'dd/MM/yyyy';
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
                    onChange={e => this.props.handleInputPost(e)}
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
                    <option value="November">November</option>
                    <option value="Desember">Desember</option>
                  </select>
                </div>
                <div className="col-6" style={{ paddingRight: "0px" }}>
                  <select
                    onChange={e => this.props.handleInputPost(e)}
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
                  onChange={e => this.props.handleInputPost(e)}
                  name="jangkaWaktuObjekPajak"
                  class="custom-select"
                >
                  <option value="" selected disabled>
                    pilih
                  </option>
                  <option
                    value={
                      localStorage.getItem("tipeReklamePayer") ===
                      "Reklame Non Permanen"
                        ? "Mingguan"
                        : "Tahunan"
                    }
                  >
                    {localStorage.getItem("tipeReklamePayer") ===
                    "Reklame Non Permanen"
                      ? "Mingguan"
                      : "Tahunan"}
                  </option>
                </select>
              </div>
            </div>
            <div className="inputPeriodeObjekPajak">
              <span className="judulPeriodeBerlaku">
                Periode Berlaku Pajak{" "}
              </span>
              <div className="container" style={{ display: "flex" }}>
                <div className="row rowInputTanggal">
                  <div
                    className="col-md-5 col-sm-5 mulaiPeriode"
                    style={{ textAlign: "center" }}
                  >
                    <DropdownButton
                      className="dropDownPeriodeAwal"
                      title={
                        store.getState().periodePemasangan !== ""
                          ? convert(store.getState().periodePemasangan)
                          : "Awal"
                      }
                    >
                      <Dropdown.Item eventKey="1">
                        <DayPicker
                          className="kalenderAwal"
                          selectedDays={convert(
                            store.getState().periodePemasangan
                          )}
                          onDayClick={this.handleDayClickAwal}
                        />
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="col-md-2 col-sm-2 hingga">
                    <span>Hingga</span>
                  </div>
                  <div
                    className="col-md-5 col-sm-5 mulaiPeriode"
                    style={{ textAlign: "center" }}
                  >
                    <DropdownButton
                      className="dropDownPeriodeAkhir"
                      title={
                        store.getState().periodePembongkaran !== ""
                          ? convert(store.getState().periodePembongkaran)
                          : "Akhir"
                      }
                    >
                      <Dropdown.Item eventKey="1">
                        <DayPicker
                          className="kalenderAkhir"
                          selectedDays={convert(
                            store.getState().periodePembongkaran
                          )}
                          onDayClick={this.handleDayClickAkhir}
                        />
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="rowButtonInfo">
              <div className="jarakButton">
                <Button
                  style={{
                    backgroundColor: "#E43C25",
                    border: "1px solid #E43C25",
                    borderRadius: "5px"
                  }}
                  onClick={() => this.goToDetailObjekPajak()}
                >
                  Kembali
                </Button>
              </div>
              <div>
                {localStorage.getItem("masaPajakBulan") &&
                localStorage.getItem("masaPajakTahun") &&
                localStorage.getItem("jangkaWaktuObjekPajak") &&
                localStorage.getItem("tanggalPemasangan") &&
                localStorage.getItem("tanggalPembongkaran") ? (
                  <Button
                    variant="primary"
                    style={{ fontSize: "16px" }}
                    onClick={() => this.goToNotaPajak()}
                  >
                    Cek Tarif
                  </Button>
                ) : (
                  <Button disabled={true}>Cek Tarif</Button>
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
  "PeriodeAwal, PeriodeAkhir, jangkaWaktuPajak, periodePemasangan, periodePembongkaran",
  actions
)(withRouter(KontenInformasiPajakPayer));
