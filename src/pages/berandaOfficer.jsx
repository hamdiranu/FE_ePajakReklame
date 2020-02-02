import React, { Component } from "react";
import "../styles/styleBerandaOfficer.css";
import "../styles/styleNavigasiOfficer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from "../components/navigasiOfficer";
import KontenBerandaOfficer from "../components/kontenBerandaOfficer";

class BerandaOfficer extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigasi />
        <KontenBerandaOfficer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(BerandaOfficer));
