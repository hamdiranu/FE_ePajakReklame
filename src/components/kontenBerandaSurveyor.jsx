import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import QrReader from "react-qr-reader";
import gifScanner from "../images/scan_qr_code2.gif";
import swal from "sweetalert";

// Kelas untuk Komponen Halaman Beranda Surveyor
class KontenBerandaSurveyor extends React.Component {
  componentDidMount = async () => {
    if (localStorage.getItem("token") === null || localStorage.getItem("role") !== "surveyor"){
      await this.props.history.push("/login")
    }
    else{
      store.setState({ statusPageHomeSurveyor: true });
      store.setState({ statusSuksesScan: false, statusGagalScan: false });
    }
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
      await this.props.getIdByKodeQR();

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
          <span style={{color:"#1a3454"}}>Scan Kode QR</span>
        </div>
        <div className="container containerKotakScannerQr">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              {localStorage.getItem("token") === "" || localStorage.getItem("role") !== "surveyor" ?
                <span></span>
              :
                <QrReader
                  className="kotakScannerQr"
                  delay={this.props.scannerDelay}
                  onError={this.handleError}
                  onScan={e => this.handleScan(e)}
                />
              }              
            </div>
            <div className="col-md-6 col-sm-12 kotakPetunjuk">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 col-sm-5 kotakKalimatPetunjuk">
                    <span style={{color:"#1a3454"}}>Arahkan kamera ke kode QR</span>
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
