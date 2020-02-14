import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

// Kelas untuk Komponen Navigasi Officer
class NavigasiOfficer extends React.Component {
  logOutOfficer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-light "
          style={{
            position: "fixed",
            zIndex: "2",
            width: "100%",
            backgroundColor: "#17345F"
          }}
        >
          <span class="navbar-brand" style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              <Link
                to="/officer/home"
                style={{ textDecoration: "none" }}
                onClick={e => this.props.getDataBuktiPembayaranOfficer(1)}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/57/Kab_Bandung_Barat.svg"
                  width="40"
                  height="40"
                  class="d-inline-block align-top "
                  alt=""
                />
              </Link>
            </div>
            <div class="navbar-brand-text d-inline-block ml-1 navigasiKota">
              <div
                style={{ color: "#F47523", fontWeight: "900" }}
                class="system-name"
              >
                SIP-Rek!
              </div>
              <div
                style={{ color: "#F47523", fontWeight: "700" }}
                class="area-name"
              >
                {this.props.dataOfficer.nama_daerah}
              </div>
            </div>
          </span>
          <div class="text-right">
            <div class="navigasiUserName">
              <span style={{ color: "white" }}> Halo </span>
              <span style={{ color: "#F47523", fontWeight: "900" }}>
                {this.props.dataOfficer.nama}
              </span>
            </div>
            <span
              onClick={() => this.logOutOfficer()}
              class="btn btn-xs btn-outline-secondary tombolLogout"
            >
              Logout
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default connect("dataOfficer", actions)(withRouter(NavigasiOfficer));
