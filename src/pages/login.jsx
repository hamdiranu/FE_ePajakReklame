import React, { Component } from "react";
import "../styles/styleLogin.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import FormLoginPayer from "../components/loginPayer";
import FormLoginOfficer from "../components/loginOfficer";
import { Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import logoSipRek from "../images/logo.png";

class Login extends Component {
  loginUser = async () => {
    store.setState({ formValid: false });
    if (this.props.formOfficer === false) {
      const self = this;
      const req = {
        method: "post",
        url: "https://alterratax.my.id/login/",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          npwpd: this.props.npwpd,
          pin: this.props.pin
        }
      };
      axios(req)
        .then(function(response) {
          if (response.data.hasOwnProperty("token")) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            self.props.history.push("/payer/home");
            swal("Selamat!", "Login Sukses", "success");
          }
        })
        .catch(function(error) {
          store.setState({ loginError: true });
          self.props.history.push("/login");
          console.log("Maaf, NPWPD/PIN Tidak Ditemukan");
        });
    } else {
      const self = this;
      const req = {
        method: "post",
        url: "https://alterratax.my.id/login/",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          nip: this.props.nip,
          pin: this.props.pin
        }
      };
      axios(req)
        .then(function(response) {
          if (response.data.hasOwnProperty("token")) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            swal("Selamat!", "Login Sukses", "success");
          }
          if (localStorage.getItem("role") === "officer") {
            self.props.history.push("/officer/home");
          } else if (localStorage.getItem("role") === "surveyor") {
            self.props.history.push("/surveyor/home");
          }
        })
        .catch(function(error) {
          store.setState({ loginError: true });
          self.props.history.push("/login");
          console.log("Maaf, NIP/PIN Tidak Ditemukan");
        });
    }
  };

  render() {
    if (this.props.loginError === true) {
      if (this.props.formOfficer) {
        swal({
          title: "Oops!",
          text: "NIP atau PIN Anda salah, silahkan input ulang!",
          icon: "warning"
        });
      } else {
        swal({
          title: "Oops!",
          text: "NPWPD atau PIN Anda salah, silahkan input ulang!",
          icon: "warning"
        });
      }
      store.setState({ loginError: false });
    }

    return (
      <div className="loginWrapper fadeInDown">
        <div id="loginFormContent">
          <div className="fadeIn first">
            <div className="container-fuild loginJudul">
              <span
                style={{
                  fontWeight: "800",
                  fontSize: "larger",
                  color: "#17345F"
                }}
              >
                Masuk ke SIP-Rek!
              </span>
            </div>
            <img
              className="loginLogo"
              src={logoSipRek}
              id="icon"
              alt="User Icon"
            />
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <span className="loginPilihRole">Masuk Sebagai : </span>
            <Form.Control
              onChange={e => this.props.handleGantiRole(e)}
              name="roleFormLogin"
              className="pilihRole"
              as="select"
            >
              <option value="Payer">Wajib Pajak</option>
              <option value="Officer">Petugas Pajak</option>
            </Form.Control>
          </div>
          {/* <!-- Login Form --> */}
          <form onSubmit={e => e.preventDefault(e)}>
            {this.props.formOfficer ? <FormLoginOfficer /> : <FormLoginPayer />}
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              disabled={!this.props.formValid}
              style={{ marginBottom: "15px", marginTop: "10px" }}
              onClick={e => this.loginUser(e)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  "formOfficer, npwpd, nip, pin, role, token, formOfficer, formValid, loginError",
  actions
)(withRouter(Login));
