import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Kelas untuk Komponen Halaman Login Payer
class LoginPayer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="col-sm-12"
          style={{
            display: "grid",
            textAlign: "left",
            marginLeft: "20px",
            marginBottom: "10px"
          }}
        >
          <span className="npwpPayer" style={{ marginLeft: "5px" }}>
            NPWP :
          </span>
          <input
            type="text"
            id="npwpd"
            className="col-md-12 col-sm-12 fadeIn second"
            name="npwpd"
            placeholder="Input NPWP"
            onChange={e => this.props.handleInputLogin(e)}
          />
          {this.props.npwpdValid || this.props.npwpd === "" ? (
            <span></span>
          ) : (
            <span className="loginError">NPWPD tidak sesuai ketentuan</span>
          )}
        </div>
        <div
          className="col-sm-12"
          style={{
            display: "grid",
            textAlign: "left",
            marginLeft: "20px",
            marginBottom: "10px"
          }}
        >
          <span className="pinPayer" style={{ marginLeft: "5px" }}>
            PIN :
          </span>
          <div className="loginInputPassword">
            <input
              type={this.props.statusInputPassword}
              id="pin"
              className="col-md-11 col-sm-10 fadeIn second inputLogin"
              name="pin"
              placeholder="Input PIN"
              onChange={e => this.props.handleInputLogin(e)}
            />
            {this.props.statusShowPassword ? (
              <FaEye onClick={e => this.props.showPassword(e)} />
            ) : (
              <FaEyeSlash onClick={e => this.props.showPassword(e)} />
            )}
            <br />
            {this.props.pinValid || this.props.pin === "" ? (
              <span></span>
            ) : (
              <span className="loginError">
                PIN harus berupa angka dan minimal 8 karakter
              </span>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  "statusInputPassword, statusShowPassword, token, npwpdValid, pinValid, pin, npwpd",
  actions
)(withRouter(LoginPayer));
