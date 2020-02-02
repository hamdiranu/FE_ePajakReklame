import React, { Component } from "react";
// import "../styles/styleLogin.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from "../components/navigasiOfficer";
import BodyOfficer from "../components/homeOfficer";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigasi />
        <BodyOfficer />
      </React.Fragment>
    );
  }
}

export default connect("formOfficer", actions)(withRouter(Login));
