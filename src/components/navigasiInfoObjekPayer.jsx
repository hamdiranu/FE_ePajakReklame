import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

// Kelas untuk Komponen Navigasi pada Page Input Informasi Pajak Payer
class NavigasiPayer extends React.Component {
  logOutPayer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };

  goHomePayer = async () => {
    this.props.history.replace("/payer/home");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbarPayer navbar-shadow"
          style={{ position: "fixed", zIndex: "4", width: "100%" }}
        >
          <span className="navbar-brand" style={{ display: "flex" }}>
            <div className="">
              <span className="btn" style={{padding:"0px"}} onClick={() => this.goHomePayer()}>
                <FaHome className="" size={30} style={{color:"white"}}/>
              </span>
            </div>
          </span>
          <div>
            <b style={{color:"#F47523", fontSize:"28px"}}>
              Informasi Pajak
            </b>
          </div>
          <div class="text-right">
            <span
              onClick={() => this.logOutPayer()}
              className="btn"
              style={{color:"white", padding:"0px"}}
            >
              <FaSignOutAlt size={30}/>
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
)(withRouter(NavigasiPayer));
