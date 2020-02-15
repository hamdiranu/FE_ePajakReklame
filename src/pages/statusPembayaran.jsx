import React, { Component } from "react";
import "../styles/styleStatusPembayaran.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import KontenStatusPembayaran from "../components/kontenStatusPembayaran";

class StatusPembayaran extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem("token") === null || localStorage.getItem("role") !== "payer"){
      await this.props.history.push("/login")
    }
  };
  render() {
    return (
      <div className="loginWrapper fadeInDown">
        <KontenStatusPembayaran />
      </div>
    );
  }
}

export default connect("", actions)(withRouter(StatusPembayaran));
