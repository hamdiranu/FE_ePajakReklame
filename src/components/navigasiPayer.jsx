import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { FiFilePlus } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";

// Kelas untuk Komponen Navigasi Payer
class NavigasiPayer extends React.Component {
  logOutPayer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
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
              <Link to="/payer/input-gambar" style={{ textDecoration: "none" }}>
                <FiFilePlus className="" size={30} style={{color:"white"}}/>
              </Link>
            </div>
          </span>
          <div>
            <b style={{color:"#F47523", fontSize:"28px"}}>
              SIP-Rek!
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
