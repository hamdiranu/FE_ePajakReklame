import React, { Component } from "react";
import "../styles/styleLogin.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import FormLoginPayer from "../components/loginPayer";
import FormLoginOfficer from "../components/loginOfficer";

class Login extends Component {
  render() {
    return (
      <div className="loginWrapper fadeInDown">
        <div id="loginFormContent">
          <div className="fadeIn first">
            <div className="container-fuild loginJudul">
              <span>Masuk ke ePajak</span>
            </div>
            <img
              className="loginLogo"
              src="https://image.flaticon.com/icons/png/128/2168/2168759.png"
              id="icon"
              alt="User Icon"
            />
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <span className="loginPilihRole">Masuk Sebagai : </span>
            <select
              name="role"
              class="loginRole"
              onChange={e => this.props.handleGantiRole(e)}
            >
              <option value="Payer" selected>
                Wajib Pajak
              </option>
              <option value="Officer">Petugas Pajak</option>
            </select>
          </div>
          {/* <!-- Login Form --> */}
          {this.props.formOfficer ? <FormLoginOfficer /> : <FormLoginPayer />}
        </div>
      </div>
    );
  }
}

export default connect("formOfficer", actions)(withRouter(Login));
