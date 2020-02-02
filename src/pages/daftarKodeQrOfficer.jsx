import React, { Component } from "react";
import "../styles/styleBerandaOfficer.css";
import "../styles/styleNavigasiOfficer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiOfficer from "../components/navigasiOfficer";
import KontenDaftarKodeQr from "../components/kontenDaftarKodeQrOfficer";

class DaftarKodeQrOfficer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigasiOfficer />
        <KontenDaftarKodeQr />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(DaftarKodeQrOfficer));
