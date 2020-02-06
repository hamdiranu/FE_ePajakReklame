import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class NavigasiSurveyor extends React.Component {
  logOutOfficer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-light bg-light "
          style={{ position: "fixed", zIndex: "4", width: "100%" }}
        >
          <span class="navbar-brand" style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Kab_Bandung_Barat.svg"
                width="40"
                height="40"
                class="d-inline-block align-top"
                alt=""
              />
            </div>
            <div class="navbar-brand-text d-inline-block infoDaerah">
              <div class="systemName">ePajak</div>
              <div class="areaName">Kabupaten Bandung Barat</div>
            </div>
          </span>
          <div class="text-right">
            <span
              onClick={() => this.logOutOfficer()}
              class="btn btn-xs btn-outline-secondary tombolKeluar"
            >
              Log Out
            </span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default connect(
  "statusPageHomeSurveyor",
  actions
)(withRouter(NavigasiSurveyor));
