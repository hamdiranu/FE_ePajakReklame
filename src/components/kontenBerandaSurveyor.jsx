import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import QrReader from "react-qr-reader";

class KontenBerandaOfficer extends React.Component {
  componentDidMount = () => {
    store.setState({ statusPageHomeSurveyor: true });
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
      this.props.history.push(
        `/surveyor/detil-reklame/${store.getState().buktiPembayaranId}`
      );
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
          <QrReader
            className="kotakScannerQr"
            delay={this.props.scannerDelay}
            onError={this.handleError}
            onScan={e => this.handleScan(e)}
          />
          <p>{this.props.scannerResult}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  "scannerResult, scannerDelay, buktiPembayaranId, statusSuksesScan, showing, show",
  actions
)(withRouter(KontenBerandaOfficer));
