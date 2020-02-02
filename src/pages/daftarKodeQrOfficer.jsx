import React, { Component } from "react";
// import "../styles/styleLogin.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from "../components/navigasiOfficer";
import DaftarKodeQr from "../components/daftarKodeQrOfficer";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigasi />
        <DaftarKodeQr />
      </React.Fragment>
    );
  }
}

export default connect("formOfficer", actions)(withRouter(Login));
