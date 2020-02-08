import React, { Component } from "react";
import "../styles/styleBerandaOfficer.css";
import "../styles/styleNavigasiOfficer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiOfficer from "../components/navigasiOfficer";
import KontenBerandaOfficer from "../components/kontenBerandaOfficer";

class BerandaOfficer extends Component {
  
  componentDidMount = async () => {
    if (localStorage.getItem("token") === null || localStorage.getItem("role") !== "officer"){
      await this.props.history.push("/login")
    } else {
      await this.props.getDataOfficer();
      await this.props.getDataBuktiPembayaranOfficer();
    }
  };

  render() {
    return (
       <React.Fragment>
        <NavigasiOfficer />
        <KontenBerandaOfficer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(BerandaOfficer));
