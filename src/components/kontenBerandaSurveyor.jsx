import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import QrReader from "react-qr-reader";
import gifScanner from "../images/scan_qr_code2.gif";
import swal from "sweetalert";

// Kelas untuk Komponen Halaman Beranda Surveyor
class KontenBerandaSurveyor extends React.Component {
  componentDidMount = () => {
    store.setState({ statusPageHomeSurveyor: true });
    store.setState({ statusSuksesScan: false, statusGagalScan: false });
  };

  constructor(props) {
    super(props);
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan = async data => {
    store.setState({
      scannerResult: data
    });
    if (this.props.scannerResult !== null) {
      console.log("cek QR : ", this.props.scannerResult);
      await this.props.getIdByKodeQR();
      console.log(
        "cek state id pembayaran : ",
        store.getState().buktiPembayaranId
      );
      if (this.props.validasiKodeQR === true) {
        swal({
          title: "Oops!",
          text: "Kode QR tidak valid!",
          icon: "warning",
          button: "Ok!"
        });
        store.setState({ validasiKodeQR: false });
      } else {
        this.props.history.push(
          `/surveyor/detail-reklame/${store.getState().buktiPembayaranId}`
        );
      }
    }
  };

  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div className="kontenBerandaSurveyor">
        <div className="container judulScanQrSurveyor">
          <span>Scan Kode QR</span>
        </div>
        <div className="container containerKotakScannerQr">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <QrReader
                className="kotakScannerQr"
                delay={this.props.scannerDelay}
                onError={this.handleError}
                onScan={e => this.handleScan(e)}
              />
            </div>
            <div className="col-md-6 col-sm-12 kotakPetunjuk">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 col-sm-5 kotakKalimatPetunjuk">
                    <span>Arahkan kamera ke kode QR</span>
                  </div>
                  <div className="col-md-12 col-sm-5">
                    <img className="gifScanner" src={gifScanner} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "scannerResult, scannerDelay, buktiPembayaranId, statusSuksesScan, showing, show, validasiKodeQR",
  actions
)(withRouter(KontenBerandaSurveyor));
