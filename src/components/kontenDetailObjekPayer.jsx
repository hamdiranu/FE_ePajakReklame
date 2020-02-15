import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import gifLoading from "../images/loading11.gif";

// Kelas untuk Komponen Halaman Input Detail Objek Pajak Payer
class KontenDetailPajakPayer extends React.Component {
  componentDidMount = async () => {
    await this.props.getListDropDownInput();
    if (localStorage.getItem("tipeReklamePayer") === "Reklame Non Permanen") {
      store.setState({
        listJenisReklame: ["Spanduk, Umbul-umbul, Banner, Layar Toko", "Baligo"]
      });
    } else if (
      localStorage.getItem("tipeReklamePayer") === "Reklame Permanen"
    ) {
      store.setState({ listJenisReklame: ["Billboard/Bando", "LED"] });
    }
  };

  goToLokasiPajak = () => {
    this.props.history.push("/payer/input-lokasi");
  };

  goToInfoPajak = () => {
    this.props.history.push("/payer/input-informasi-pajak");
  };
  render() {
    return (
      <div className="container kontenInputDetailObjek">
        {this.props.loadingDetailObjek ? (
          <div className="gifLoading">
            <img src={gifLoading} alt="" />
          </div>
        ) : (
          <React.Fragment>
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
                    onChange={e => this.props.handleInputPost(e)}
                  />
                </div>
                <div className="inputDetailObjekPajak">
                  <span>Jenis Reklame</span>
                  <div className="kotakInputLokasi">
                    <select
                      onChange={e => this.props.handleInputPost(e)}
                      name="jenisObjekPajak"
                      class="custom-select"
                    >
                      <option value="" selected disabled>
                        pilih
                      </option>
                      {this.props.listJenisReklame.map(jenis => (
                        <option value={jenis}>{jenis}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="inputDetailObjekPajak">
                  <span>Tarif Tambahan</span>
                  <div className="kotakInputLokasi">
                    <select
                      onChange={e => this.props.handleInputPost(e)}
                      name="tarifTambahan"
                      class="custom-select"
                    >
                      <option value="" selected disabled>
                        pilih
                      </option>
                      {store
                        .getState()
                        .listDropDown["list_tarif_tambahan"].map(tarif => (
                          <option value={tarif}>{tarif}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="inputDetailObjekPajak">
                  <span>Sudut Pandang</span>
                  <div className="kotakInputLokasi">
                    <select
                      onChange={e => this.props.handleInputPost(e)}
                      name="sudutPandang"
                      class="custom-select"
                    >
                      <option value="" selected disabled>
                        pilih
                      </option>
                      {store
                        .getState()
                        .listDropDown["list_sudut_pandang"].map(sudut => (
                          <option value={sudut}>{sudut}</option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 ">
                <div className="inputDetailObjekPajak">
                  <span>Letak Pemasangan</span>
                  <select
                    onChange={e => this.props.handleInputPost(e)}
                    name="letakPemasangan"
                    class="custom-select"
                  >
                    <option value="" selected disabled>
                      pilih
                    </option>
                    {store
                      .getState()
                      .listDropDown["list_letak_pemasangan"].map(letak => (
                        <option value={letak}>{letak}</option>
                      ))}
                  </select>
                </div>
                <div className="inputDetailObjekPajak">
                  <span>Klasifikasi Jalan</span>
                  <select
                    onChange={e => this.props.handleInputPost(e)}
                    name="klasifikasiJalan"
                    class="custom-select"
                  >
                    <option value="" selected disabled>
                      pilih
                    </option>
                    {store
                      .getState()
                      .listDropDown["list_klasifikasi_jalan"].map(
                        klasifikasi => (
                          <option value={klasifikasi}>{klasifikasi}</option>
                        )
                      )}
                  </select>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="col-4 colKiri">
                    <span>Muka</span>
                    <div className="kotakInputLokasi">
                      <FormControl
                        className="barInputDetail"
                        placeholder="0"
                        aria-label="judul"
                        aria-describedby="basic-addon1"
                        name="mukaObjekPajak"
                        onChange={e => this.props.handleInputPost(e)}
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
                        onChange={e => this.props.handleInputPost(e)}
                      />
                      <InputGroup.Prepend className="kotakSimbolMeter">
                        <InputGroup.Text
                          style={{ padding: "3px 11px" }}
                          className="kotakMeter"
                          id="basic-addon1"
                        >
                          m
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                    </div>
                  </div>
                  <div className="col-4 colKanan">
                    <span>Jumlah</span>
                    <div className="kotakInputLokasi">
                      <FormControl
                        className="barInputDetail"
                        placeholder="0"
                        aria-label="judul"
                        aria-describedby="basic-addon1"
                        name="jumlahReklameObjekPajak"
                        onChange={e => this.props.handleInputPost(e)}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="col-4 colKiri">
                    <span>Panjang</span>
                    <div className="kotakInputLokasi">
                      <FormControl
                        className="barInputDetail"
                        placeholder="0"
                        aria-label="judul"
                        aria-describedby="basic-addon1"
                        name="panjangObjekPajak"
                        onChange={e => this.props.handleInputPostLuas(e)}
                      />
                      <InputGroup.Prepend className="kotakSimbolMeter">
                        <InputGroup.Text
                          style={{ padding: "3px 11px" }}
                          className="kotakMeter"
                        >
                          m
                        </InputGroup.Text>
                      </InputGroup.Prepend>
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
                        onChange={e => this.props.handleInputPostLuas(e)}
                      />
                      <InputGroup.Prepend className="kotakSimbolMeter">
                        <InputGroup.Text
                          style={{ padding: "3px 11px" }}
                          className="kotakMeter"
                          id="basic-addon1"
                        >
                          m
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                    </div>
                  </div>
                  <div className="col-4 colKanan">
                    <span>Luas</span>
                    <div className="kotakInputLokasi">
                      <FormControl
                        className="barInputDetail"
                        placeholder={
                          this.props.panjangObjekPajak *
                          this.props.lebarObjekPajak
                        }
                        aria-label="judul"
                        aria-describedby="basic-addon1"
                        name="lebarObjekPajak"
                        disabled
                      />
                      <InputGroup.Prepend className="kotakSimbolMeter">
                        <InputGroup.Text
                          style={{ padding: "3px 11px" }}
                          className="kotakMeter"
                          id="basic-addon1"
                        >
                          m<sup>2</sup>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                    </div>
                  </div>
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
                    {localStorage.getItem("panjangObjekPajak") * 1 &&
                    localStorage.getItem("lebarObjekPajak") * 1 &&
                    localStorage.getItem("judulObjekPajak") &&
                    localStorage.getItem("jenisObjekPajak") &&
                    localStorage.getItem("tarifTambahan") &&
                    localStorage.getItem("sudutPandang") &&
                    localStorage.getItem("mukaObjekPajak") * 1 &&
                    localStorage.getItem("ketinggianObjekPajak") * 1 &&
                    localStorage.getItem("jumlahReklameObjekPajak") * 1 &&
                    localStorage.getItem("letakPemasangan") &&
                    localStorage.getItem("klasifikasiJalan") ? (
                      <Button
                        disabled={false}
                        onClick={() => this.goToInfoPajak()}
                      >
                        Lanjutkan
                      </Button>
                    ) : (
                      <Button disabled={true}>Lanjutkan</Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default connect(
  "panjangObjekPajak, lebarObjekPajak, luasObjekPajak, listDropDown, listJenisReklame, loadingDetailObjek",
  actions
)(withRouter(KontenDetailPajakPayer));
