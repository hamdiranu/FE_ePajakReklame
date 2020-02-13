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
          className="navbar navbar-light bg-light px-5"
          style={{ position: "fixed", zIndex: "2", width: "100%" }}
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
              <div class="system-name">SIP-Rek</div>
              <div class="area-name">{this.props.dataOfficer.nama_daerah}</div>
            </div>
          </span>
          <div class="text-right">
            <div class="navigasiUserName">
              Halo, {this.props.dataOfficer.nama}
            </div>
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

export default connect("dataOfficer", actions)(withRouter(NavigasiOfficer));
