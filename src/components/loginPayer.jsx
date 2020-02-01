import React from "react";
import "../styles/styleLogin.css";
import "../styles/bootstrap.min.css";
// import logo from "../images/logoM.png";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class LoginPayer extends React.Component {
  submit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submit}>
          <div
            className="col-sm-12"
            style={{
              display: "grid",
              textAlign: "left",
              marginLeft: "20px",
              marginBottom: "10px"
            }}
          >
            <span style={{ marginLeft: "5px" }}>NPWP :</span>
            <input
              type="text"
              id="npwp"
              className="col-md-12 col-sm-12 fadeIn second"
              name="npwp"
              placeholder="Input NPWP"
              onChange={e => this.props.handleInputLogin(e)}
            />
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
            <span style={{ marginLeft: "5px" }}>PIN :</span>
            <input
              type="password"
              id="pin"
              className="col-md-12 col-sm-12 fadeIn second"
              name="pin"
              placeholder="Input PIN"
              onChange={e => this.props.handleInputLogin(e)}
            />
          </div>
          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
            style={{ marginBottom: "15px", marginTop: "10px" }}
            //   onClick={this.handleLogin}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(LoginPayer));
