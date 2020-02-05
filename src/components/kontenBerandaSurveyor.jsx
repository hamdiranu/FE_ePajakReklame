import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import QrReader from "react-qr-reader";

class KontenBerandaOfficer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result"
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data
    });
    if (this.state.result !== null) {
      this.props.history.push("/surveyor/detil-reklame");
    }
  }
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
            delay={this.state.delay}
            onError={this.handleError}
            onScan={e => this.handleScan(e)}
          />
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default connect("", actions)(withRouter(KontenBerandaOfficer));
