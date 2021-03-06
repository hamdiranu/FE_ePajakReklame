import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Form } from "react-bootstrap";

class KontenBerandaPayer extends React.Component {
  componentDidMount = () => {
    this.props.getDaftarLaporan();
  };

  render() {
    var currencyFormatter = require("currency-formatter");
    var filterDaftarLaporan = this.props.daftarLaporanPayer;
    if (this.props.filterByDaftarLaporan === "batal") {
      filterDaftarLaporan = filterDaftarLaporan.filter(
        element => element.laporan.pembatalan_laporan === true
      );
    } else if (this.props.filterByDaftarLaporan === "belum") {
      filterDaftarLaporan = filterDaftarLaporan.filter(
        element =>
          element.laporan.status_pembayaran === false &&
          element.laporan.pembatalan_laporan === false
      );
    } else if (this.props.filterByDaftarLaporan === "sudah") {
      filterDaftarLaporan = filterDaftarLaporan.filter(
        element => element.laporan.status_pembayaran === true
      );
    }
    return (
      <div className="kontenBerandaPayer">
        <div className="container-fluid containerPerusahaanPayer">
          <div className="row rowInfoPerusahaan">
            <div className="col-md-12 col-sm-4 kotakBorderLogo">
              <div className="borderLogoPerusahaan">
                <img
                  className="logoPerusahaan"
                  src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-8 infoPerusahaan">
              <span
                className="namaPayer"
                style={{ color: "white", fontWeight: "700" }}
              >
                {this.props.payerInfo.nama}
              </span>
              <span
                className="npwpPayer"
                style={{ color: "white", fontWeight: "700" }}
              >
                {this.props.payerInfo.npwpd}
              </span>
            </div>
          </div>
        </div>
        <div className="container-fluid rowGantiListStatus">
          <div className="row rowStatusLaporan">
            <div className="col-md-6 col-sm-6 kalimatStatusLaporan">
              <span style={{ fontWeight: "bold" }}>STATUS LAPORAN : </span>
            </div>
            <div className="col-md-6 col-sm-6 statusLaporan">
              <Form.Control
                onChange={e => this.props.handleGantiStatusPajak(e)}
                name="filterByDaftarLaporan"
                className="pilihStatusPajak"
                as="select"
              >
                <option value="semua">Semua Status</option>
                <option value="batal">Batal Lapor</option>
                <option value="belum">Belum Bayar</option>
                <option value="sudah">Sudah Bayar</option>
              </Form.Control>
            </div>
          </div>
        </div>
        <div>
          <ul class="list-group">
            <li class="list-group-item dh">
              <div class="row">
                <div class="col no-sspd">Nomor SKPD</div>
                <div class="col nama-wp">Nama Reklame</div>
                <div class="col nama-reklame">Masa Pajak</div>
                <div class="col jenis-reklame">Status Laporan</div>
                <div class="col status">Total Pajak</div>
                <div class="col qr-code">Detail Laporan</div>
              </div>
            </li>

            {filterDaftarLaporan.map(laporan => {
              var infoStatusLaporan;
              if (laporan.laporan.pembatalan_laporan === true) {
                infoStatusLaporan = (
                  <div
                    class="col-4 col-sm order-sm-4 statusLaporan dt-small"
                    style={{ color: "red" }}
                  >
                    Batal Lapor
                  </div>
                );
              } else {
                if (laporan.laporan.status_pembayaran === true) {
                  infoStatusLaporan = (
                    <div
                      class="col-4 col-sm order-sm-4 statusLaporan dt-small"
                      style={{ color: "green" }}
                    >
                      Sudah Bayar
                    </div>
                  );
                } else {
                  infoStatusLaporan = (
                    <div
                      class="col-4 col-sm order-sm-4 statusLaporan dt-small"
                      style={{ color: "orange" }}
                    >
                      Belum Bayar
                    </div>
                  );
                }
              }
              return (
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-8 col-sm order-sm-1 nomorSkpd">
                      {laporan.laporan.nomor_skpd}
                    </div>
                    {infoStatusLaporan}
                    <div class="col-8 col-sm order-sm-2 namaReklamePayer">
                      {laporan.objek_pajak.nama_reklame}
                    </div>
                    <div class="col-4 col-sm order-sm-5 totalPajakPayer">
                      Rp{" "}
                      {currencyFormatter.format(laporan.laporan.total_pajak, {
                        code: "IDR",
                        symbol: ""
                      })}
                    </div>
                    <div class="col-8 col-sm order-sm-3 masaPajak">
                      {laporan.objek_pajak.masa_pajak}
                    </div>
                    <div class="col-4 col-sm order-sm-6 detilLaporan">
                      <Link to={`/payer/detail-laporan/${laporan.laporan.id}`}>
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  "payerInfo, daftarLaporanPayer, filterByDaftarLaporan",
  actions
)(withRouter(KontenBerandaPayer));
