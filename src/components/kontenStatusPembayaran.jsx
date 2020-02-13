import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";

// Kelas untuk Komponen Halaman Status Pembayaran
class StatusPembayaran extends React.Component {
  goToDetailObjekPajak = () => {
    this.props.history.push(
      `/payer/detail-laporan/${this.props.detilLaporan.id}`
    );
  };
  render() {
    var currencyFormatter = require("currency-formatter");
    console.log("cek isi state response", this.props.dataStatusSuksesBayar);
    return (
      <React.Fragment>
        {this.props.statusSuksesbayar ? (
          <div id="statusPembayaranSuksesContent">
            <div className="fadeIn first">
              <div className="container-fuild statusSuksesPembayaranJudul">
                <span>Pembayaran Berhasil</span>
              </div>
              <div className="logoStatusSuksesPembayaran">
                <FaCheckCircle />
              </div>
            </div>
            <div className="rowinfoBayar" style={{ textAlign: "center" }}>
              <span className="tulisanSuksesFontKecil">Metode Pembayaran</span>
              <span className="tulisanSuksesFontBesar">
                Bank Transfer - BCA
              </span>
            </div>
            <div className="rowinfoBayar" style={{ textAlign: "center" }}>
              <span className="tulisanSuksesFontKecil">Nominal</span>
              <span className="tulisanSuksesFontBesar">
                Rp{" "}
                {currencyFormatter.format(
                  this.props.dataStatusSuksesBayar["laporan"]["total_pajak"],
                  {
                    code: "IDR",
                    symbol: ""
                  }
                )}{" "}
              </span>
            </div>
            <div className="rowinfoBayar" style={{ textAlign: "center" }}>
              <span className="tulisanSuksesFontKecil">ID Pembayaran</span>
              <span className="tulisanSuksesFontBesar">
                {
                  this.props.dataStatusSuksesBayar["bukti-pembayaran"][
                    "nomor_sspd"
                  ]
                }
              </span>
            </div>
            <Button
              className="buttonBackToDetail"
              variant="primary"
              onClick={() => this.goToDetailObjekPajak()}
            >
              Kembali
            </Button>
          </div>
        ) : (
          <div id="statusPembayaranGagalContent">
            <div className="fadeIn first">
              <div className="container-fuild statusGagalPembayaranJudul">
                <span>Pembayaran Gagal</span>
              </div>
              <div className="logoStatusGagalPembayaran">
                <FaTimesCircle />
              </div>
            </div>
            <div
              className="rowinfoGagalBayar"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              <span className="tulisanGagalFontBesar">
                Batas Waktu Pembayaran Telah Habis
              </span>
            </div>
            <div
              className="rowinfoGagalBayar"
              style={{ textAlign: "center", marginBottom: "30px" }}
            >
              <span className="tulisanGagalFontKecil">
                Mohon Lakukan Pembayaran Ulang
              </span>
            </div>
            <Button
              className="buttonBackToDetail"
              variant="primary"
              onClick={() => this.goToDetailObjekPajak()}
            >
              Kembali
            </Button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  "statusSuksesbayar, detilLaporan, dataStatusSuksesBayar",
  actions
)(withRouter(StatusPembayaran));
