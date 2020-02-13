import React, { Component } from "react";
import "../styles/styleStatusPembayaran.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import KontenStatusPembayaran from "../components/kontenStatusPembayaran";

class Login extends Component {
  render() {
    return (
      <div className="loginWrapper fadeInDown">
        <KontenStatusPembayaran />
      </div>
    );
  }
}

export default connect("", actions)(withRouter(Login));
