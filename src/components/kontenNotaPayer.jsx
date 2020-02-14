import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Button, FormControl, InputGroup } from "react-bootstrap";

// Kelas untuk Komponen Halaman Nota Pajak Payer
class KontenNotaPayer extends React.Component {
  goToDetailLaporan = async() => {
    await this.props.postInputPayer();
    await this.props.history.push(`/payer/detail-laporan/${this.props.laporanIDPost}`);
  };
  render() {
    var currencyFormatter = require("currency-formatter");
    return (
      <div className="container kontenInputDetailObjek">
        <div className="juduKontenDetailObjekPajak">
          <span>NOTA PAJAK</span>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
            <div style={{ display: "flex" }}>
              <div className="col-6">
                <span className="fontTulisan">Nilai Letak Pemasangan</span>
                <div className="kotakInputLokasi">
                  <InputGroup.Prepend className="kotakSimbolMataUang">
                    <InputGroup.Text className="kotakRp" id="basic-addon1">
                      Rp
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className="barInfoTarif"
                    placeholder={currencyFormatter.format(this.props.detailLaporanPut.nfr, {
                      code: "IDR",
                      symbol: ""
                    })}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="nilaiLuasReklame"
                    disabled
                  />
                </div>
              </div>
              <div className="col-6">
                <span className="fontTulisan">Nilai Klasifikasi Jalan</span>
                <div className="kotakInputLokasi">
                  <InputGroup.Prepend className="kotakSimbolMataUang">
                    <InputGroup.Text className="kotakRp" id="basic-addon1">
                      Rp
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className="barInfoTarif"
                    placeholder={currencyFormatter.format(this.props.detailLaporanPut.nfj, {
                      code: "IDR",
                      symbol: ""
                    })}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="nilaiTinggiReklame"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="col-6">
                <span className="fontTulisan">Nilai Sudut Pandang</span>
                <div className="kotakInputLokasi">
                  <InputGroup.Prepend className="kotakSimbolMataUang">
                    <InputGroup.Text className="kotakRp" id="basic-addon1">
                      Rp
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className="barInfoTarif"
                    placeholder={currencyFormatter.format(this.props.detailLaporanPut.nsp, {
                      code: "IDR",
                      symbol: ""
                    })}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="nilaiSudutPandangReklame"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="informasiTarifPajak">
              <span className="fontTulisan">Nilai Strategis Reklame</span>
              <div className="kotakInputLokasi">
                <InputGroup.Prepend className="kotakSimbolMataUang">
                  <InputGroup.Text className="kotakRp" id="basic-addon1">
                    Rp
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="barInfoTotalTarif"
                  placeholder={currencyFormatter.format(this.props.detailLaporanPut.nspr, {
                    code: "IDR",
                    symbol: ""
                  })}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="nilaiStrategisReklame"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div style={{ display: "flex" }}>
              <div className="col-6">
                <span className="fontTulisan">Nilai Luas Reklame</span>
                <div className="kotakInputLokasi">
                  <InputGroup.Prepend className="kotakSimbolMataUang">
                    <InputGroup.Text className="kotakRp" id="basic-addon1">
                      Rp
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className="barInfoTarif"
                    placeholder={currencyFormatter.format(this.props.detailLaporanPut.nlr, {
                      code: "IDR",
                      symbol: ""
                    })}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="nilaiLuasReklame"
                    disabled
                  />
                </div>
              </div>
              <div className="col-6">
                <span className="fontTulisan">Nilai Tinggi Reklame</span>
                <div className="kotakInputLokasi">
                  <InputGroup.Prepend className="kotakSimbolMataUang">
                    <InputGroup.Text className="kotakRp" id="basic-addon1">
                      Rp
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className="barInfoTarif"
                    placeholder={currencyFormatter.format(this.props.detailLaporanPut.nkr, {
                      code: "IDR",
                      symbol: ""
                    })}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="nilaiTinggiReklame"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="informasiTarifPajak">
              <span className="fontTulisan">Tarif NJOPR</span>
              <div className="kotakInputLokasi">
                <InputGroup.Prepend className="kotakSimbolMataUang">
                  <InputGroup.Text className="kotakRp" id="basic-addon1">
                    Rp
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="barInfoTotalTarif"
                  placeholder={currencyFormatter.format(this.props.detailLaporanPut.njopr, {
                    code: "IDR",
                    symbol: ""
                  })}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="nilaiTinggiReklame"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="container" style={{ display: "grid" }}>
            <div className="container-fluid" style={{ display: "flex" }}>
              <div className="col-6">
                <span className="fontTulisan">Tarif Pajak Reklame</span>
                <div className="kotakInputLokasi">
                  <InputGroup.Prepend className="kotakSimbolMataUang">
                    <InputGroup.Text className="kotakPersen" id="basic-addon1">
                      %
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className="barInfoTarif"
                    placeholder={this.props.detailLaporanPut.tarif_pajak * 100}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="nilaiLuasReklame"
                    disabled
                  />
                </div>
              </div>
              <div className="col-6">
                <span className="fontTulisan">Tarif Tambahan</span>
                <div className="kotakInputLokasi">
                  <InputGroup.Prepend className="kotakSimbolMataUang">
                    <InputGroup.Text className="kotakPersen" id="basic-addon1">
                      %
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  {localStorage.getItem("tarifTambahan")==="Rokok/Miras" ?
                    <FormControl
                      className="barInfoTarif"
                      placeholder="25"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="tarifTambahan"
                      disabled
                    />
                  :
                    <FormControl
                      className="barInfoTarif"
                      placeholder="0"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="tarifTambahan"
                      disabled
                    />
                  }                  
                </div>
              </div>
            </div>
            <div className="informasiTotalTarifPajak">
              <span className="fontTulisan">Total Tarif Pajak</span>
              <div className="kotakInputLokasi">
                <InputGroup.Prepend className="kotakSimbolMataUang">
                  <InputGroup.Text className="kotakRp" id="basic-addon1">
                    Rp
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="barInfoTotalTarif"
                  placeholder={currencyFormatter.format(this.props.detailLaporanPut.total_pajak, {
                    code: "IDR",
                    symbol: ""
                  })}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="totalTarifPajak"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div>
              <div
                className="col-12"
                style={{
                  textAlign: "center",
                  marginBottom: "30px"
                }}
              >
                <Button
                  variant="success"
                  onClick={() => this.goToDetailLaporan()}
                >
                  Simpan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("laporanID, detailLaporanPut, detailLaporanPost, laporanIDPost", actions)(withRouter(KontenNotaPayer));

