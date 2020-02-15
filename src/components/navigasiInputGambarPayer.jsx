import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { FaFileImage, FaSignOutAlt } from "react-icons/fa";

// Kelas untuk Komponen Navigasi pada Page Input Gambar Payer
class NavigasiPayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  };
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
    store.setState({blobGambar: URL.createObjectURL(event.target.files[0]),
      objekGambar:event.target.files[0]});
    localStorage.setItem(`fotoReklamePayer`, `${URL.createObjectURL(event.target.files[0])}`);
  };
  logOutPayer = async () => {
    this.props.handleLogOut();
    this.props.history.replace("/login");
  };
  myFunction = async () => {
    document.getElementById('fileItem').click();
  }
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbarPayer navbar-shadow"
          style={{ position: "fixed", zIndex: "4", width: "100%" }}
        >
          <span class="navbar-brand" style={{ display: "flex" }}>
            <div className="btn" onClick={() => this.myFunction()} style={{padding:"0px"}}>
              <div style={{ textDecoration: "none" }}>
                <FaFileImage id="buttonUnggah" size={30} style={{color:"white"}}/>
                <input type="file"
                  style={{width:"50%", display:"none"}}
                  id="fileItem"
                  onChange={this.handleChange}>
                </input>
              </div>
            </div>
          </span>
          <div>
            <b style={{color:"#F47523", fontSize:"28px"}}>
              Unggah Foto
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
  "statusPageHomeSurveyor, blobGambar, objekGambar",
  actions
)(withRouter(NavigasiPayer));
