import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class NavigasiOfficer extends React.Component {
  logOutOfficer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-light bg-light "
          style={{ position: "fixed", zIndex: "2", width: "100%" }}
        >
          <a class="navbar-brand" style={{ display: "flex" }} href="/">
            <div style={{ margin: "auto" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Kab_Bandung_Barat.svg"
                width="40"
                height="40"
                class="d-inline-block align-top "
                alt=""
              />
            </div>
            <div class="navbar-brand-text d-inline-block ml-1 navigasiKota">
              <div class="system-name">ePajak</div>
              <div class="area-name">Kabupaten Bandung Barat</div>
            </div>
          </a>
          <div class="text-right">
            <div class="navigasiUserName">Halo, Officer</div>
            <span
              onClick={() => this.logOutOfficer()}
              class="btn btn-xs btn-outline-secondary tombolKeluar"
            >
              Logout
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(NavigasiOfficer));
